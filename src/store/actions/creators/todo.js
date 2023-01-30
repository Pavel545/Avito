import {
  ALL_REQUEST_FAILURE,
  ALL_REQUEST_STARTED,

  ALL_CARD_SUCCESS,
  CERTAIN_CARD_SUCCESS,
} from "../types/todo";

export const allRequestStarted = () => ({
  type: ALL_REQUEST_STARTED,
});

export const allCardSuccess = (todos) => ({
  type: ALL_CARD_SUCCESS,
  payload: {
    todos: {
      all: todos,
    },
  },
});
export const certainCardSuccess = (todos) => ({
  type: CERTAIN_CARD_SUCCESS,
  payload: {
    todos: {
      current: todos,
    },
  },
});
export const allRequestFailure = (error) => ({
  type: ALL_REQUEST_FAILURE,
  payload: {
    error,
  },
});
