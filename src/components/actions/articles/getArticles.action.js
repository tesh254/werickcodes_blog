import axios from "axios";
import {
  GET_ARTICLES_ERROR,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS
} from "../types";

import env from "../../../env.json";

const initialState = {};

export const loadingResource = () => ({
  type: GET_ARTICLES_REQUEST
});

export const errorOnLoad = data => ({
  type: GET_ARTICLES_ERROR,
  payload: data
});

export const successOnLoad = data => ({
  type: GET_ARTICLES_SUCCESS,
  payload: data
});

const fetchArticles = () => async dispatch => {
  dispatch(loadingResource());

  await axios
    .get(`${env.BASE_URL}blogs`)
    .then(response => {
      dispatch(successOnLoad(response.data.blogs));
    })
    .catch(err => {
      dispatch(errorOnLoad(err.response.data));
    });
};

export default fetchArticles;
