import {put, select, takeLatest} from '@redux-saga/core/effects';
import {URL_API} from '../../api/const';
import axios from 'axios';
import {
  SEARCH_REQUEST,
  searchRequestError,
  searchRequestSuccess,
  searchRequestSuccessAfter,
} from './searchAction';

function* fetchSearch({search}) {
  const token = yield select(state => state.token.token);
  const after = yield select(state => state.search.after);

  try {
    const request = yield axios(
      `${URL_API}/search?q=${search}&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      },
    );

    if (after) {
      yield put(searchRequestSuccessAfter(request.data.data));
    } else {
      yield put(searchRequestSuccess(request.data.data));
    }
  } catch (error) {
    yield put(searchRequestError(error));
  }
}

export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
}
