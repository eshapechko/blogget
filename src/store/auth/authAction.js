import axios from 'axios';
import {URL_API} from '../../api/const';
import {delToken} from '../token/tokenAction';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCES = 'AUTH_REQUEST_SUCCES';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authRequestSucces = data => ({
  type: AUTH_REQUEST_SUCCES,
  data,
});

export const authRequestError = error => ({
  type: AUTH_REQUEST_ERROR,
  error,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const authRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;

  dispatch(authRequest());

  axios(`${URL_API}/api/v1/me`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data: {name, icon_img: iconImg}}) => {
      const img = iconImg.replace(/\?.*$/, '');
      const data = {name, img};

      dispatch(authRequestSucces(data));
    })
    .catch(error => {
      console.log(error);
      if (error.toString().includes('401')) {
        alert('Ошибка токена, получите новый токен');
      }

      dispatch(delToken());
      dispatch(authRequestError(error.toString()));
    });
};
