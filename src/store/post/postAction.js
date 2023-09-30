import axios from 'axios';
import {URL_API} from '../../api/const';
import {delToken} from '../token/tokenAction';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCES = 'POST_REQUEST_SUCCES';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export const POST_DELETE = 'POST_DELETE';
export const POST_REQUEST_SUCCES_AFTER = 'POST_REQUEST_SUCCES_AFTER';
export const CHANGE_PAGE = 'CHANGE_PAGE';

const postRequest = () => ({
  type: POST_REQUEST,
});

const postRequestSucces = data => ({
  type: POST_REQUEST_SUCCES,
  data: data.children,
  after: data.after,
});

const postRequestSuccesAfter = data => ({
  type: POST_REQUEST_SUCCES_AFTER,
  data: data.children,
  after: data.after,
});

const postRequestError = error => ({
  type: POST_REQUEST_ERROR,
  error,
});

const postDelete = () => ({
  type: POST_DELETE,
});

export const changePage = page => ({
  type: CHANGE_PAGE,
  page,
});

export const postRequestAsync = newPage => (dispatch, getState) => {
  let page = getState().post.page;

  if (newPage) {
    page = newPage;
    dispatch(changePage(page));
  }

  const token = getState().token.token;
  const after = getState().post.after;
  const loading = getState().post.loading;
  const isLast = getState().post.isLast;

  if (!token || loading || isLast) return;

  dispatch(postRequest());

  axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      if (after) {
        dispatch(postRequestSuccesAfter(data.data));
      } else {
        dispatch(postRequestSucces(data.data));
      }
    })
    .catch(error => {
      if (error.message.toString().includes('401')) {
        alert('Ошибка сервера, зайдите позже');
      }

      dispatch(delToken());
      dispatch(postRequestError(error.toString()));
      dispatch(postDelete());
    });
};
