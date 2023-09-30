import style from './Auth.module.css';
import LoginIconPath from './img/login.svg';
import {Text} from '../../../UI/Text/Text';
import {urlAuth} from '../../../api/auth';
import {useState} from 'react';
import {Svg} from '../../../UI/SVG/Svg';
import {useDispatch, useSelector} from 'react-redux';
import {useAuth} from '../../../hooks/useAuth';
import {AuthLoader} from '../../../UI/AuthLoader/AuthLoader';
import {delToken} from '../../../store/token/tokenAction';
import {clearComment} from '../../../store/comment/commentAction';
import {Notification} from '../../Notification/Notification';

export const Auth = () => {
  const [auth, loading, clearAuth] = useAuth();
  const comment = useSelector(state => state.comment.comment);
  const errorAuth = useSelector(state => state.auth.error);
  const [buttonLogout, setButtonLogout] = useState(false);

  const dispatch = useDispatch();

  const deleteToken = () => {
    dispatch(delToken());
    dispatch(clearComment(comment));
    clearAuth();
  };

  const handleClick = () => {
    setButtonLogout(!buttonLogout);
  };

  return (
    <div className={style.container}>
      {loading ? (
        <AuthLoader size={30} />
      ) : auth.name ? (
        <>
          <button onClick={handleClick} className={style.btn}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}
            />
          </button>
          {buttonLogout && (
            <button className={style.logout} onClick={deleteToken}>
              Выйти
            </button>
          )}
          <Text className={style.authName} size={12}>
            {auth.name}
          </Text>
        </>
      ) : (
        <>
          <Text className={style.authLink} As="a" href={urlAuth}>
            <Svg path={LoginIconPath} id="login" className={style.svg} />
          </Text>
          {errorAuth && <Notification />}
        </>
      )}
    </div>
  );
};
