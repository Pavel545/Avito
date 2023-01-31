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
} from "../actions/types/todo";

const initialState = {
  loading: false,
  error: null,
  todos: { all: [],current:{}, seller: [], user:{}},//, pages: [], author: [], location: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_REQUEST_FAILURE: {
      console.log(action.payload.error);
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case USER_REQUEST_FAILURE: {
      console.log(action.payload.error);
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
    case USER_REQUEST_STARTED: {
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
          seller: [...state.todos.seller],
          user:{...state.todos.user}
        },
      };
      case USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,

        todos: {
          all: [...state.todos.all],
          seller: [...state.todos.seller],
          user:{...action.payload.todos.user}
        },
      };
      case CERTAIN_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,

        todos: {
          all: [...state.todos.all],
          current:{...action.payload.todos.current},
          seller: [...state.todos.seller],
          user:{...state.todos.user},
        },
      };
      case USER_REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
  
          todos: {
            all: [...state.todos.all],
            seller: [...state.todos.seller],
            user:{...action.payload.todos.user}
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
          user:{...state.todos.user},

        },
      };

    default:
      return state;
  }
}
