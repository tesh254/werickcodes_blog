import { combineReducers } from "redux";
import getArticlesReducer from "./getArticles";
import getSingleArticleReducer from "./getSingleArticle";
import searchReducer from "./search";

const rootReducer = combineReducers({
    articles: getArticlesReducer,
    article: getSingleArticleReducer,
    search: searchReducer
  });

export default rootReducer;