import {
    MOVIES_LIST_REQUEST,
    MOVIES_LIST_SUCCESS,
    MOVIES_LIST_FAILURE,
    MOVIES_LIST_RESET
} from '../constants/MovieConstants.js'

export const MovieListReducer = (state = { data: { movies: [], pages: 0 } }, action) => {
    switch (action.type) {
        case MOVIES_LIST_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case MOVIES_LIST_SUCCESS: {
            return {
                data: {
                    movies: [...state.data.movies, ...action.payload.movies],
                    pages: action.payload.pages
                },
                loading: false
            }
        }
        case MOVIES_LIST_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case MOVIES_LIST_RESET: {
            return {
                data: {
                    movies: [],
                    pages: 0
                }
            }
        }
        default: {
            return state;
        }
    }
}