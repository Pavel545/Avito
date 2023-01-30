import {
  ALL_REQUEST_FAILURE,
  ALL_REQUEST_STARTED,
  ALL_CARD_SUCCESS,
  CERTAIN_CARD_SUCCESS
} from "../actions/types/todo";

const initialState = {
  loading: false,
  error: null,
  todos: { all: [],current:{} },//, pages: [], author: [], location: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_REQUEST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case ALL_REQUEST_STARTED: {
      return {
        ...state,
        loading: true,
      };
    }

    case ALL_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,

        todos: {
          all: [...action.payload.todos.all],
          // pages: [...state.todos.pages],
          // author: [...state.todos.author],
          // location: [...state.todos.location],
        },
      };
      case CERTAIN_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,

        todos: {
          all: [...state.todos.all],
          current:[...action.payload.todos.current]
        },
      };

    default:
      return state;
  }
}
