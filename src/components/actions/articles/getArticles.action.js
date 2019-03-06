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

const getArticlesAction = () => async dispatch => {
  dispatch(loadingResource());

  axios
    .get(`${env.BASE_URL}blogs`)
    .then(response => {
      console.log(response.data);
      dispatch(successOnLoad(response.data));
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch(errorOnLoad(err.response.data));
    });
};

export default getArticlesAction;
