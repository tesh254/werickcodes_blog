import Router from "next/router";
import axios from "axios";
import env from "../../env";
import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_ERROR
} from "./types";

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
    .get(`${env.base_url}/blogs-active`)
    .then(response => {
      dispatch(successOnLoad(GET_ARTICLES_SUCCESS, response.data.blogs));
    })
    .catch(err => {
      dispatch(errorOnLoad(GET_ARTICLES_ERROR, err.response.message));
    });
};

export default fetchArticles;
