import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenReducer} from './token/tokenReducer';
import thunk from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {tokenMiddleware} from './token/tokenAction';
import {postReducer} from './post/postReducer';
import {commentReducer} from './comment/commentReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  post: postReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
