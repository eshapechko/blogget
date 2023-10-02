import axios from 'axios';
import {URL_API} from '../../api/const';
import {delToken} from '../token/tokenAction';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const postRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState, dispatch}) => {
    const token = getState().token.token;
    const after = getState().post.after;
    const isLast = getState().post.isLast;
    let page = getState().post.page;

    if (newPage) {
      page = newPage;
    }

    if (!token || isLast) return;

    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      },
    )
      .then(({data}) => {
        if (after) {
          return {data: data.data.children, after: data.data.after};
        } else {
          return {data: data.data.children, after: data.data.after};
        }
      })
      .catch(error => {
        console.log('error: ', error);
        dispatch(delToken());

        return error.message.toString();
      });
  },
);
