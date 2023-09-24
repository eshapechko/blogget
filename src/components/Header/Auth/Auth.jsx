import style from './Auth.module.css';
import LoginIconPath from './img/login.svg';
import {Text} from '../../../UI/Text/Text';
import {urlAuth} from '../../../api/auth';
import {useContext, useState} from 'react';
import {Svg} from '../../../UI/SVG/Svg';
import {authContext} from '../../../context/authContext';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store';

export const Auth = () => {
  const {auth, clearAuth} = useContext(authContext);
  const [buttonLogout, setButtonLogout] = useState(false);

  const dispatch = useDispatch();

  const deleteTok = () => {
    dispatch(deleteToken());
    clearAuth();
  };

  const handleClick = () => {
    setButtonLogout(!buttonLogout);
  };

  return (
    <div className={style.container}>
      {auth.name ? (
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
            <button className={style.logout} onClick={deleteTok}>
              Выйти
            </button>
          )}
          <Text className={style.authName} size={12}>
            {auth.name}
          </Text>
        </>
      ) : (
        <Text className={style.authLink} As="a" href={urlAuth}>
          <Svg path={LoginIconPath} id="login" className={style.svg} />
        </Text>
      )}
    </div>
  );
};
