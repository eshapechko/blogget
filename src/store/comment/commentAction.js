import axios from 'axios';
import {URL_API} from '../../api/const';

export const COMMENT_REQUEST = 'COMMENT_REQUEST';
export const COMMENT_REQUEST_SUCCES = 'COMMENT_REQUEST_SUCCES';
export const COMMENT_REQUEST_ERROR = 'COMMENT_REQUEST_ERROR';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const CLEAR_COMMENT = 'CLEAR_COMMENT';

export const commentRequest = () => ({
  type: COMMENT_REQUEST,
});

export const commentRequestSucces = data => ({
  type: COMMENT_REQUEST_SUCCES,
  data,
});

export const commentRequestError = error => ({
  type: COMMENT_REQUEST_ERROR,
  error,
});

export const updateComment = updateComment => ({
  type: UPDATE_COMMENT,
  updateComment,
});

export const clearComment = comment => ({
  type: CLEAR_COMMENT,
  comment,
});

export const commentRequestAsync = id => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) {
    return;
  }

  dispatch(commentRequest());

  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      const commentsData = data[1].data.children;
      const comments = commentsData.map(item => item.data);
      const post = data[0].data.children[0].data;

      dispatch(commentRequestSucces([post, comments]));
    })
    .catch(error => {
      if (error.message.toString().includes('401')) {
        alert('Ошибка авторизации, получите токен');
      }

      dispatch(commentRequestError(error.toString()));
    });
};
