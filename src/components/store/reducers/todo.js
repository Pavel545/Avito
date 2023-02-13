import { ALL_CARD_SUCCESS, CERTAIN_CARD_SUCCESS } from "../actions/types/todo";

const initialState = {
  loading: false,
  error: null,
  todos: { all: [],card:{} },
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
        },
      };
      case CERTAIN_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,

        todos: {
          // all: [...state.todos.all],
          card:{...action.payload.todos.card},
        },
      };
    default:
      return state;
  }
}
