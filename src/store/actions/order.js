import * as actionTypes from "./actionTypes";

export const bookMovieSuccess = (id, orderData) => {
  return {
    type: actionTypes.BOOK_MOVIE_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const bookMoviesFailed = error => {
  return {
    type: actionTypes.BOOK_MOVIE_FAIL,
    error: error
  };
};

export const bookMovieStart = () => {
  return {
    type: actionTypes.BOOK_MOVIE_START
  };
};

export const bookMovieFinish = () => {
  return {
    type: actionTypes.BOOK_MOVIE_FINISH
  };
};

export const bookMovie = (orderData, token) => {
  return {
    type: actionTypes.BOOK_MOVIE,
    orderData: orderData,
    token: token
  };
};

export const bookingInit = () => {
  return {
    type: actionTypes.BOOKING_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = (token, userId) => {
  return {
    type: actionTypes.FETCH_ORDERS,
    token: token,
    userId: userId
  };
};
