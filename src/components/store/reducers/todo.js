import {
  ALL_CARD_SUCCESS,
  ALL_SELLER_SUCCESS,
  CERTAIN_CARD_SUCCESS,
} from "../actions/types/todo";

const initialState = {
  loading: false,
  error: null,
  todos: { all: [], card: {},seller:[] },
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,

        todos: {
          all: [...action.payload.todos.all],
          seller: [...state.todos.seller],

        },
      };
    case CERTAIN_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,

        todos: {
          all: [...state.todos.all],
          card: { ...action.payload.todos.card },
        },
      };
    case ALL_SELLER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,

        todos: {
          all: [...state.todos.all],
          seller: [...action.payload.todos.seller],
        },
      };
    default:
      return state;
  }
}
