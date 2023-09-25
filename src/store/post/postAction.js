import axios from 'axios';
import {URL_API} from '../../api/const';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCES = 'POST_REQUEST_SUCCES';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export const POST_DELETE = 'POST_DELETE';

const postRequest = () => ({
  type: POST_REQUEST,
});

const postRequestSucces = data => ({
  type: POST_REQUEST_SUCCES,
  data,
});

const postRequestError = error => ({
  type: POST_REQUEST_ERROR,
  error,
});

const postDelete = () => ({
  type: POST_DELETE,
});

export const postRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) {
    dispatch(postDelete());
    return;
  }

  dispatch(postRequest());

  axios(`${URL_API}/best`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(data => {
      data = data.data.data.children;
      dispatch(postRequestSucces(data));
    })
    .catch(error => {
      if (error.toString().includes('401')) {
        alert('Ошибка сервера, зайдите позже');
      }

      dispatch(postRequestError(error.toString()));
    });
};
