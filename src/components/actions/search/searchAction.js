import axios from "axios";
import env from "../../../env.json";
import { LOADING, SEARCH_SUCCESS, ERRORS } from "../types.js";

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

export default searchQuery;