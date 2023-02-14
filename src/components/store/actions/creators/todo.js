import { ALL_CARD_SUCCESS, ALL_SELLER_SUCCESS, CERTAIN_CARD_SUCCESS } from "../types/todo";


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
export const allSeller = (seller) => ({
  type: ALL_SELLER_SUCCESS,
  payload: {
    todos: {
      seller: seller,
    },
  },
});
