import { combineReducers } from "redux";
import getAllArticles from './articles/getAllArticles';

const rootReducer = combineReducers({
    articles: getAllArticles
});

export default rootReducer;