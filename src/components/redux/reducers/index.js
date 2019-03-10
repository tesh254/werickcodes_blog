import { combineReducers } from "redux";
import getAllArticles from './articles/getAllArticles';
import getOneArticle from "./articles/getOneArticle";

const rootReducer = combineReducers({
    articles: getAllArticles,
    article: getOneArticle
});

export default rootReducer;