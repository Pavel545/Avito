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
  USER_TOKENS_SUCCESS,
  USER_PATCH_SUCCESS,
  ARTICLE_UP_SUCCESS,
  USER_COMMENTS_SUCCESS,
} from "../actions/types/todo";

const initialState = {
  loading: false,
  error: null,
  todos: { all: [], current: {}, seller: [], user: {}},
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
          user: { ...state.todos.user },
          tokens:{...state.todos.tokens}
        },
      };
      case USER_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,

        todos: {
          all: [...state.todos.all],
          seller: [...state.todos.seller],
          user: { ...state.todos.user },
          tokens:{...state.todos.tokens},
          comment: {...action.payload.todos.comment},

        },
      };
    case USER_TOKENS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,

        todos: {
          all: [...state.todos.all],
          seller: [...state.todos.seller],
          user: { ...state.todos.user },
          tokens: { ...action.payload.todos.tokens },
        },
      };
    case CERTAIN_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,

        todos: {
          all: [...state.todos.all],
          current: { ...action.payload.todos.current },
          seller: [...state.todos.seller],
          user: { ...state.todos.user },
          tokens: { ...state.todos.tokens },
          comments:[],
        },
      };
      case ARTICLE_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,

        todos: {
          all: [...state.todos.all],
          current: { ...action.payload.todos.current },
          seller: [...state.todos.seller],
          user: { ...state.todos.user },
          comments:[],

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
          tokens: { ...state.todos.tokens },

          user: { ...action.payload.todos.user },
        },
      };
    case USER_PATCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,

        todos: {
          all: [...state.todos.all],
          seller: [...state.todos.seller],
          tokens: { ...state.todos.tokens },

          user: { ...action.payload.todos.user },
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
          user: { ...state.todos.user },
          tokens:{...state.todos.tokens}
        },
      };

    default:
      return state;
  }
}
