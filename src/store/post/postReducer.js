import {
  CHANGE_PAGE,
  POST_DELETE,
  POST_REQUEST,
  POST_REQUEST_ERROR,
  POST_REQUEST_SUCCES,
  POST_REQUEST_SUCCES_AFTER,
} from './postAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  countPage: 0,
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
        after: action.after,
        isLast: !action.after,
        countPage: action.after ? state.countPage + 1 : 0,
      };

    case POST_REQUEST_SUCCES_AFTER:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.data],
        error: '',
        after: action.after,
        isLast: !action.after,
        countPage: action.after ? state.countPage + 1 : 0,
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

    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
        after: '',
        isLast: false,
        countPage: 0,
      };

    default:
      return state;
  }
};
