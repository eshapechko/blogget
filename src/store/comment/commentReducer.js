import {
  UPDATE_COMMENT,
  COMMENT_REQUEST,
  COMMENT_REQUEST_SUCCES,
  COMMENT_REQUEST_ERROR,
  CLEAR_COMMENT,
} from './commentAction';

const initialState = {
  loading: false,
  comment: '',
  updateComment: '',
  error: '',
  status: '',
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        status: 'loading',
      };
    case COMMENT_REQUEST_SUCCES:
      return {
        ...state,
        loading: false,
        comment: action.data,
        error: '',
        status: 'loaded',
      };
    case COMMENT_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        status: 'error',
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        loading: false,
        updateComment: action.updateComment,
        error: '',
      };
    case CLEAR_COMMENT:
      return {
        ...state,
        loading: false,
        comment: '',
        updateComment: '',
        error: '',
        status: '',
      };
    default:
      return state;
  }
};
