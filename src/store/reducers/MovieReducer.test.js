import {
    MovieDetailReducer, MovieListReducer
} from '../reducers/MovieReducer.js'
import {
    MOVIES_DETAIL_FAILURE,
    MOVIES_DETAIL_REQUEST,
    MOVIES_DETAIL_SUCCESS,
    MOVIES_LIST_FAILURE,
    MOVIES_LIST_REQUEST,
    MOVIES_LIST_RESET,
    MOVIES_LIST_SUCCESS,
} from '../constants/MovieConstants.js'

describe('Get Movie', () => {
    test('Default State', () => {
        const newState = MovieDetailReducer({ data: {} }, {});
        expect(newState).toEqual({ data: {} })
    })

    test('Requesting State', () => {
        const newState = MovieDetailReducer({ data: {} }, { type: MOVIES_DETAIL_REQUEST });
        expect(newState).toEqual({ loading: true })
    })

    test('Success State', () => {
        const newState = MovieDetailReducer({ data: {} }, { type: MOVIES_DETAIL_SUCCESS, payload: 'SAMPLE_DATA' });
        expect(newState).toEqual({ loading: false, data: 'SAMPLE_DATA' })
    })

    test('Error State', () => {
        const newState = MovieDetailReducer({ data: { message: 'something' } }, { type: MOVIES_DETAIL_FAILURE, payload: 'SAMPLE_ERROR' });
        expect(newState).toEqual({ loading: false, error: 'SAMPLE_ERROR' })
    })
})

describe('Movies List', () => {
    test('Default State', () => {
        const newState = MovieListReducer({ data: { movies: ['A', 'B', 'C'], pages: 1 } }, {});
        expect(newState).toEqual({ data: { movies: ['A', 'B', 'C'], pages: 1 } })
    })

    test('Requesting State', () => {
        const newState = MovieListReducer({ data: { movies: ['A', 'B', 'C'], pages: 1 } }, { type: MOVIES_LIST_REQUEST });
        expect(newState).toEqual({ loading: true, data: { movies: ['A', 'B', 'C'], pages: 1 } })
    })

    test('Success State', () => {
        const newState = MovieListReducer({ data: { movies: ['A', 'B', 'C'], pages: 1 } }, { type: MOVIES_LIST_SUCCESS, payload: { movies: ['D', 'E'], pages: 2 } });
        expect(newState).toEqual({ loading: false, data: { movies: ['A', 'B', 'C', 'D', 'E'], pages: 2 } })
    })

    test('Error State', () => {
        const newState = MovieListReducer({ data: { movies: ['A', 'B', 'C'], pages: 1 } }, { type: MOVIES_LIST_FAILURE, payload: 'SAMPLE_ERROR' });
        expect(newState).toEqual({ loading: false, error: 'SAMPLE_ERROR', data: { movies: ['A', 'B', 'C'], pages: 1 } })
    })

    test('Reset State', () => {
        const newState = MovieListReducer({ loading: false, data: { movies: ['A', 'B', 'C'], pages: 1 } }, { type: MOVIES_LIST_RESET });
        expect(newState).toEqual({ data: { movies: [], pages: 0 } })
    })
})