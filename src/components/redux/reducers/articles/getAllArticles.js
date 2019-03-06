import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_ERROR
} from "../../../actions/types";

const initialState = {};

const getAllArticles = (state = initialState, action) => {
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
        payload: action.payload,
        isLoading: false
      };
  }
};

export default getAllArticles;
