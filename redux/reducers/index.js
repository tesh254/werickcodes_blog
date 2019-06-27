import { combineReducers } from "redux";
import getArticlesReducer from "./articles/getArticles";
import getSingleArticleReducer from "./articles/getSingleArticle";
import searchReducer from "../reducers/search/search";

const rootReducer = combineReducers({
    articles: getArticlesReducer,
    article: getSingleArticleReducer,
    search: searchReducer
  });

export default rootReducer;