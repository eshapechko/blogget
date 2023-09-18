import style from './Auth.module.css';
import LoginIconPath from './img/login.svg';
import {Text} from '../../../UI/Text/Text';
import {urlAuth} from '../../../api/auth';
import {useContext, useState} from 'react';
import {Svg} from '../../../UI/SVG/Svg';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const {auth, clearAuth} = useContext(authContext);
  const [buttonLogout, setButtonLogout] = useState(false);

  const deleteToken = () => {
    delToken();
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
            <button className={style.logout} onClick={deleteToken}>
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
