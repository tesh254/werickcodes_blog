import { SEARCH_SUCCESS, LOADING, ERRORS } from "../../../actions/types";

const initialState = {
    results: [],
    error: "",
    isLoading: false
}

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_SUCCESS:
            return {
                ...state,
                results: action.payload.results,
                error: "",
                isLoading: false
            }
        case LOADING: 
            return {
                ...state,
                results: [],
                error: "",
                isLoading: true
            }
        case ERRORS: 
            return {
                ...state,
                results: [],
                error: action.payload.message,
                isLoading: false
            }
        default: 
            return state
    }
}

export default searchReducer;