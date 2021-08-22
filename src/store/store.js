import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { MovieListReducer } from './reducers/MovieReducer.js'

const reducer = combineReducers({
    movieList: MovieListReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store