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
        payload: action.payload.blogs,
        isLoading: false,
        blog_count: action.payload.blog_count,
        current_page: action.payload.current_page,
        pages: action.payload.pages
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
    default:
      return state;
  }
};

export default getAllArticles;
