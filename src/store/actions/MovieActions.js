import axios from 'axios'
import {
    MOVIES_LIST_REQUEST,
    MOVIES_LIST_SUCCESS,
    MOVIES_LIST_FAILURE,
} from '../constants/MovieConstants.js'

export const listMovies = (page = 1) => async (dispatch) => {
    try {
        dispatch({ type: MOVIES_LIST_REQUEST })

        const { data } = await axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=689f2bd90d83f0bd6b6bc75e80d979df&page=' + page
        })

        dispatch({
            type: MOVIES_LIST_SUCCESS,
            payload: { movies: data.results, pages: data.total_pages }
        })

    } catch (error) {

        dispatch({
            type: MOVIES_LIST_FAILURE,
            payload: {
                statusCode: error.response.data.status_code,
                message: error.response.data.status_message,
            }
        })
    }
}