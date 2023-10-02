import axios from 'axios';
import {URL_API} from '../../api/const';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const commentRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, {getState}) => {
    const token = getState().token.token;
    if (!token) return;

    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data}) => {
        const commentsData = data[1].data.children;
        const comments = commentsData.map(item => item.data);
        const post = data[0].data.children[0].data;

        return [post, comments];
      })
      .catch(error => {
        if (error.message.toString().includes('401')) {
          alert('Ошибка авторизации, получите токен');
        }

        return {error: error.toString()};
      });
  },
);
