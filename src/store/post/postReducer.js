import {
  POST_DELETE,
  POST_REQUEST,
  POST_REQUEST_ERROR,
  POST_REQUEST_SUCCES,
} from './postAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case POST_REQUEST_SUCCES:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };

    case POST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case POST_DELETE:
      return {
        ...state,
        loading: false,
        error: '',
        data: [],
      };

    default:
      return state;
  }
};
