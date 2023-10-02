import {configureStore} from '@reduxjs/toolkit';
import {tokenReducer} from './token/tokenReducer';
import {authReducer} from './auth/authReducer';
import {tokenMiddleware} from './token/tokenAction';
import postsReducer from './post/postsSlice';
import commentsReducer from './comment/commentsSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentsReducer,
    auth: authReducer,
    post: postsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
