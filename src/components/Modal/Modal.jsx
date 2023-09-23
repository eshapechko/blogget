import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Text} from '../../UI/Text/Text';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComment/FormComment';

export const Modal = ({id, closeModal}) => {
  const [commentsPost] = useCommentsData(id);

  const [post, comments] = commentsPost;
  console.log('post: ', post);
  console.log('comments: ', comments);

  const overlayRef = useRef(null);

  const handleClick = e => {
    const target = e.target;

    if (target === overlayRef.current) {
      closeModal();
    }
  };

  const handleEscape = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      {!commentsPost.length ? (
        <div className={style.overlay} ref={overlayRef}>
          <div className={style.modal}>
            <h2 className={style.title}>Loading</h2>
          </div>
        </div>
      ) : (
        <div className={style.overlay} ref={overlayRef}>
          <div className={style.modal}>
            <h2 className={style.title}>{post.title}</h2>

            <div className={style.content}>
              <Markdown
                options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_blank',
                      },
                    },
                  },
                }}
              >
                {post.selftext}
              </Markdown>
            </div>

            <Text As="p" className={style.author}>
              {post.author}
            </Text>

            <FormComment />
            <Comments comments={comments} />

            <button className={style.close} onClick={closeModal}>
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
    </>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
  id: PropTypes.string,
};
