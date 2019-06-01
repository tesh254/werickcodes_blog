import axios from "axios";
import env from "../../../env";
import { LOADING, SEARCH_SUCCESS, ERRORS, CLEAR_SEARCH } from "../types.js";

const searchQuery = query => dispatch => {
    dispatch({
        type: LOADING
    })
    axios
    .get(`${env.BASE_URL}/search?query=${query}`)
    .then(res => (
        dispatch({
            type: SEARCH_SUCCESS,
            payload: res.data
        })
    ))
    .catch(err => (
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    ))
}

export const clearSearch = () => dispatch => {
    dispatch({
        type: CLEAR_SEARCH
    })
}

export default searchQuery;