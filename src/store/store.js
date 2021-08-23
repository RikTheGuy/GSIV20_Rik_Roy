import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { MovieListReducer, MovieDetailReducer } from './reducers/MovieReducer.js'

const reducer = combineReducers({
    movieList: MovieListReducer,
    movieDetail: MovieDetailReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store