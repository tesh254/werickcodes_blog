import axios from "axios";
import env from "../../env";
import {
  GET_ONE_ARTICLE_REQUEST,
  GET_ONE_ARTICLE_SUCCESS,
  GET_ONE_ARTICLE_ERROR
} from "./types";
import { loadingResource, errorOnLoad, successOnLoad } from "./getArticles";

const fetchSingleArticle = slug => async dispatch => {
  dispatch(loadingResource(GET_ONE_ARTICLE_REQUEST));

  await axios
    .get(`${env.base_url}/blogs/${slug}`)
    .then(response => {
      dispatch(successOnLoad(GET_ONE_ARTICLE_SUCCESS, response.data));
    })
    .catch(err => {
      dispatch(errorOnLoad(GET_ONE_ARTICLE_ERROR, err.response.data.message));
    });
};

export default fetchSingleArticle;
