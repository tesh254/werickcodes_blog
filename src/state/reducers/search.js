import {
  LOADING,
  SEARCH_SUCCESS,
  ERRORS,
  CLEAR_SEARCH
} from "../actions/types";

const initialState = {};

const searchQuery = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        results: action.payload.results || [],
        error: "",
        isLoading: false
      };
    case LOADING:
      return {
        ...state,
        results: [],
        error: "",
        isLoading: true
      };
    case ERRORS:
      return {
        ...state,
        results: [],
        error: action.payload.message,
        isLoading: false
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        results: [],
        error: "",
        isLoading: false
      };
    default:
      return state;
  }
};

export default searchQuery;
