import {useRef, useState} from 'react';
import {Text} from '../../../UI/Text/Text';
import style from './FormComment.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store/comment/commentsSlice';

export const FormComment = () => {
  const value = useSelector(state => state.comment.updateComment);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.data);

  const [viewForm, setViewForm] = useState(true);
  const textRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    console.log(value);
  };

  const handleForm = () => {
    setViewForm(false);
    setTimeout(() => {
      textRef.current.focus();
    }, 0);
  };

  const handleChange = e => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <>
      {viewForm ? (
        <button className={style.btn} onClick={handleForm}>
          Написать комментарий
        </button>
      ) : (
        <form className={style.form}>
          <Text As="h3" size={14} tsize={18}>
            {auth.name}
          </Text>
          <textarea
            className={style.textarea}
            value={value}
            onChange={handleChange}
            ref={textRef}
          ></textarea>
          <button className={style.btn} onClick={handleSubmit}>
            Отправить
          </button>
        </form>
      )}
    </>
  );
};
