import { ALL_CARD_SUCCESS, CERTAIN_CARD_SUCCESS } from "../types/todo";


export const allCardGalleri = (todos) => ({
  type: ALL_CARD_SUCCESS,
  payload: {
    todos: {
      all: todos,
    },
  },
});
export const cardWan = (todos) => ({
  type: CERTAIN_CARD_SUCCESS,
  payload: {
    todos: {
      card: todos,
    },
  },
});
