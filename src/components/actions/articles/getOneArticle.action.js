import axios from "axios";
import env from "../../../env.json";
import {
  loadingResource,
  successOnLoad,
  errorOnLoad
} from "./getArticles.action.js";
import {
  GET_ONE_ARTICLE_REQUEST,
  GET_ONE_ARTICLE_SUCCESS,
  GET_ONE_ARTICLE_ERROR
} from "../types.js";

const fetchOneArticle = slug => async dispatch => {
  dispatch(loadingResource(GET_ONE_ARTICLE_REQUEST));

  await axios
    .get(`${env.BASE_URL}blogs/${slug}`)
    .then(response => {
      dispatch(successOnLoad(GET_ONE_ARTICLE_SUCCESS, response.data));
    })
    .catch(err => {
      dispatch(errorOnLoad(GET_ONE_ARTICLE_ERROR, err.response.data));
    });
};

export default fetchOneArticle;
