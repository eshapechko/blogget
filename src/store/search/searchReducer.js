import {
  CLEAR_SEARCH,
  SEARCH_REQUEST,
  SEARCH_REQUEST_ERROR,
  SEARCH_REQUEST_SUCCESS,
  SEARCH_REQUEST_SUCCESS_AFTER,
} from './searchAction';

const initialState = {
  loadingSearch: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  search: '',
  countSearchPage: 0,
  searchRequest: true,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loadingSearch: true,
        error: '',
        search: action.search,
        searchRequest: true,
      };

    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        loadingSearch: false,
        posts: action.posts,
        error: '',
        after: action.after,
        isLast: !action.after,
        countSearchPage: action.after ? state.countSearchPage + 1 : 0,
        searchRequest: true,
      };
    case SEARCH_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loadingSearch: false,
        posts: [...state.posts, ...action.posts],
        error: '',
        after: action.after,
        isLast: !action.after,
        countSearchPage: action.after ? state.countSearchPage + 1 : 0,
        searchRequest: true,
      };
    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        loadingSearch: false,
        error: action.error,
        searchRequest: true,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        loadingSearch: false,
        posts: [],
        after: '',
        isLast: false,
        error: '',
        search: '',
        countSearchPage: 0,
        searchRequest: false,
      };

    default:
      return state;
  }
};
