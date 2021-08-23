import {
    MOVIES_LIST_REQUEST,
    MOVIES_LIST_SUCCESS,
    MOVIES_LIST_FAILURE,
    MOVIES_LIST_RESET,

    MOVIES_DETAIL_REQUEST,
    MOVIES_DETAIL_SUCCESS,
    MOVIES_DETAIL_FAILURE,
} from '../constants/MovieConstants.js'

export const MovieListReducer = (state = { data: { movies: [], pages: 0 } }, action) => {
    switch (action.type) {
        case MOVIES_LIST_REQUEST: {
            return {
                data: state.data,
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

export const MovieDetailReducer = (state = { data: {} }, action) => {
    switch (action.type) {
        case MOVIES_DETAIL_REQUEST: {
            return {
                loading: true
            }
        }
        case MOVIES_DETAIL_SUCCESS: {
            return {
                loading: false,
                data: action.payload
            }
        }
        case MOVIES_DETAIL_FAILURE: {
            return {
                loading: false,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}