import {configureStore} from '@reduxjs/toolkit';
import {tokenReducer} from './token/tokenReducer';
import {authReducer} from './auth/authReducer';
import {tokenMiddleware} from './token/tokenAction';
import postsReducer from './post/postsSlice';
import commentsReducer from './comment/commentsSlice';
import {searchReducer} from './search/searchReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentsReducer,
    auth: authReducer,
    post: postsReducer,
    search: searchReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tokenMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
