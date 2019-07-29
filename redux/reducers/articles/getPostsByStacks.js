import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_ERROR,
  GET_ARTICLES_REQUEST
} from "../../actions/types";

const initialState = {};

const fetchPostsByStacks = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        isLoading: false
      };
    case GET_ARTICLES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_ARTICLES_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default fetchPostsByStacks;