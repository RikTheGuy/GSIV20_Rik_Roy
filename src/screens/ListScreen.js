import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../components/Header/index.js'
import MovieItem from '../components/MovieItem/index.js'

import { listMovies, searchMovies } from '../store/actions/MovieActions.js'
import { MOVIES_LIST_RESET } from '../store/constants/MovieConstants.js'

import './ListScreen.scss'

const ListScreen = () => {

    const dispatch = useDispatch()
    const { data, loading, error } = useSelector(state => state.movieList)

    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)

    const observer = useRef()
    const lastElementRef = useCallback(node => {
        if (loading)
            return

        if (observer.current)
            observer.current.disconnect()

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && page < data.pages) {
                if (query.length > 0) {
                    dispatch(searchMovies(query, page + 1))
                } else {
                    dispatch(listMovies(page + 1))
                }
                setPage(prev => prev + 1)
            }
        })

        if (node) observer.current.observe(node)
    }, [loading, data.pages, page, query, dispatch])

    useEffect(() => {
        setPage(1)
        dispatch({ type: MOVIES_LIST_RESET })
        dispatch(listMovies())
    }, [dispatch])

    const performSearch = (e) => {
        e.preventDefault()

        setPage(1)
        dispatch({ type: MOVIES_LIST_RESET })
        if (query.length > 0) {
            dispatch(searchMovies(query))
        } else {
            dispatch(listMovies())
        }


    }

    const performCancel = () => {
        setQuery('')
        setPage(1)
        dispatch({ type: MOVIES_LIST_RESET })
        dispatch(listMovies())
    }

    return (
        <>
            <Header searchbar query={query} setQuery={setQuery} onSearch={performSearch} onCancel={performCancel} />
            <div className='main-grid'>
                {
                    data.movies.map((movie, index) => {
                        if (data.movies.length === index + 1) {
                            return <div ref={lastElementRef} key={movie.id}><MovieItem item={movie} /></div>
                        }
                        else
                            return <div key={movie.id}><MovieItem item={movie} /></div>
                    })
                }
            </div>
            <div className='data-container'>
                {
                    loading ? 'Loading...' :
                        error != null && error.message
                }
            </div>
        </>
    )
}

export default ListScreen
