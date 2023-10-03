export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS';
export const SEARCH_REQUEST_ERROR = 'SEARCH_REQUEST_ERROR';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const SEARCH_REQUEST_SUCCESS_AFTER = 'SEARCH_REQUEST_SUCCESS_AFTER';

export const searchRequest = search => ({
  type: SEARCH_REQUEST,
  search,
});

export const searchRequestSuccess = ({children, after}) => ({
  type: SEARCH_REQUEST_SUCCESS,
  posts: children,
  after,
});

export const searchRequestSuccessAfter = ({children, after}) => ({
  type: SEARCH_REQUEST_SUCCESS_AFTER,
  posts: children,
  after,
});

export const searchRequestError = error => ({
  type: SEARCH_REQUEST_ERROR,
  error,
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});
