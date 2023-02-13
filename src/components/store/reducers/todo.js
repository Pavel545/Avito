import { ALL_CARD_SUCCESS } from "../actions/types/todo";

const initialState = {
  loading: false,
  error: null,
  todos: { all: [] },
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

    default:
      return state;
  }
}
