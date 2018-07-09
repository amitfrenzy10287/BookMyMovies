import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga
} from "./auth";
import { initMoviesAvailableSaga,initSeatsAvailableSaga } from "./movieBooking";
import { bookMovieSaga, fetchOrdersSaga } from "./order";

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
  ]);
} 

export function* watchMovieBooking() { 
  yield takeEvery(actionTypes.INIT_MOVIES, initMoviesAvailableSaga);
  yield takeEvery(actionTypes.INIT_MOVIES, initSeatsAvailableSaga);
}

export function* watchOrder() {
  yield takeLatest(actionTypes.BOOK_MOVIE, bookMovieSaga);
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}
