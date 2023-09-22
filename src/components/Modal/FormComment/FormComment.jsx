import {useContext, useRef, useState} from 'react';
import {Text} from '../../../UI/Text/Text';
import style from './FormComment.module.css';
import {authContext} from '../../../context/authContext';

export const FormComment = () => {
  const {auth} = useContext(authContext);
  const [viewForm, setViewForm] = useState(true);
  const textRef = useRef(null);

  const handleClick = e => {
    e.preventDefault();

    console.log(textRef.current.value);
  };

  const handleForm = () => {
    setViewForm(false);
    setTimeout(() => {
      textRef.current.focus();
    }, 0);
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
          <textarea className={style.textarea} ref={textRef}></textarea>
          <button className={style.btn} onClick={handleClick}>
            Отправить
          </button>
        </form>
      )}
    </>
  );
};
