import { ALL_CARD_SUCCESS } from "../types/todo";


export const allCardGalleri = (todos) => ({
  type: ALL_CARD_SUCCESS,
  payload: {
    todos: {
      all: todos,
    },
  },
});
