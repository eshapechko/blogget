import style from './Auth.module.css';
import PropTypes from 'prop-types';
import LoginIconPath from './img/login.svg';
import {Text} from '../../../UI/Text/Text';
import {urlAuth} from '../../../api/auth';
import {useState} from 'react';
import {URL_API} from '../../../api/const';
import {Svg} from '../../../UI/SVG/Svg';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = ({token, delToken}) => {
  const [buttonLogout, setButtonLogout] = useState(false);
  const [auth] = useAuth(URL_API, token, delToken, {});

  const deleteToken = () => {
    delToken();
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

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
