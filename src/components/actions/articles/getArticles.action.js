import axios from "axios";
import {
  GET_ARTICLES_ERROR,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS
} from "../types";
import env from "../../../env";


export const loadingResource = type => ({
  type: type
});

export const errorOnLoad = (type, data) => ({
  type: type,
  payload: data
});

export const successOnLoad = (type, data) => ({
  type: type,
  payload: data
});

const fetchArticles = () => async dispatch => {
  dispatch(loadingResource(GET_ARTICLES_REQUEST));

  await axios
    .get(`${env.BASE_URL}/blogs-active`)
    .then(response => {
      dispatch(successOnLoad(GET_ARTICLES_SUCCESS, response.data.blogs));
    })
    .catch(err => {
      dispatch(errorOnLoad(GET_ARTICLES_ERROR, err.response));
    })
};

export default fetchArticles;
