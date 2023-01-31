import {
  ALL_REQUEST_FAILURE,
  ALL_REQUEST_STARTED,
  ALL_CARD_SUCCESS,
  CERTAIN_CARD_SUCCESS,
  ALL_SELLER_SUCCESS,
  USER_REQUEST_FAILURE,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_STARTED,
  USER_REGISTER_SUCCESS,
} from "../types/todo";

export const allRequestStarted = () => ({
  type: ALL_REQUEST_STARTED,
});

export const userRequestStarted = () => ({
  type: USER_REQUEST_STARTED,
});
export const allCardSuccess = (todos) => ({
  type: ALL_CARD_SUCCESS,
  payload: {
    todos: {
      all: todos,
    },
  },
});
export const userRequestSuccess = (todos) => ({
  type: USER_REQUEST_SUCCESS,
  payload: {
    todos: {
      user: todos,
    },
  },
});
export const userRegisterSuccess = () => ({
  type: USER_REGISTER_SUCCESS,
});
export const certainCardSuccess = (todos) => ({
  type: CERTAIN_CARD_SUCCESS,
  payload: {
    todos: {
      current: todos,
    },
  },
});
export const allSellerSuccess = (todos) => ({
  type: ALL_SELLER_SUCCESS,
  payload: {
    todos: {
      seller: todos,
    },
  },
});
export const allRequestFailure = (error) => ({
  type: ALL_REQUEST_FAILURE,
  payload: {
    error,
  },
});
export const userRequestFailure = (error) => ({
  type: USER_REQUEST_FAILURE,
  payload: {
    error,
  },
});
