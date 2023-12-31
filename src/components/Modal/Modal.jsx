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
import {AuthLoader} from '../../UI/AuthLoader/AuthLoader';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const [commentsPost, status] = useCommentsData(id);

  const [post, comments] = commentsPost;
  console.log('post: ', post);
  console.log('comments: ', comments);

  const overlayRef = useRef(null);

  const handleClick = e => {
    const target = e.target;

    if (target === overlayRef.current) {
      navigate(`/category/${page}`);
    }
  };

  const handleEscape = e => {
    if (e.key === 'Escape') {
      navigate(`/category/${page}`);
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
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && <AuthLoader size={70} />}
        {status === 'error' && 'Ошибка...'}
        {status === 'loaded' && (
          <>
            <Text As="h2" className={style.title} size={22}>
              {post.title}
            </Text>

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

            <button
              className={style.close}
              onClick={() => {
                navigate(`/category/${page}`);
              }}
            >
              <CloseIcon />
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
};
