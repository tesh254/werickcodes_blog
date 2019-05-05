import { combineReducers } from "redux";
import getAllArticles from './articles/getAllArticles';
import getOneArticle from "./articles/getOneArticle";
import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
    articles: getAllArticles,
    article: getOneArticle,
    search: searchReducer
});

export default rootReducer;