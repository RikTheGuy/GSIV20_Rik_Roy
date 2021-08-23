import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../components/Header/index.js'
import Loader from '../components/Loader/index.js'
import Message from '../components/Message/index.js'

import { getMovie } from '../store/actions/MovieActions.js'

import './DetailScreen.scss'

const DetailScreen = ({ match }) => {
    const dispatch = useDispatch()
    const { data, loading, error } = useSelector(state => state.movieDetail)

    var [directors, setDirectors] = useState([])

    useEffect(() => {
        dispatch(getMovie(match.params.id))
    }, [dispatch, match])

    useEffect(() => {
        if (!loading && !error && data && data.credits) {
            setDirectors(data.credits.crew.filter(x => x.job === 'Director'))
        }
    }, [loading, error, data])

    return (
        <>
            <Header title='Movie Details' />
            <div>{loading ? <Loader /> :
                error ? <Message message={error.message} danger /> :
                    data && data.credits &&
                    <div className='movieDetail'>
                        <div className='image'>
                            <img src={data.poster_path ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}` : '/notfound.jpg'} alt={data.title} />
                        </div>
                        <div className='container'>
                            <div>
                                <h4>{data.title}</h4>
                                <span className='rating'>({
                                    (data.vote_average != null && data.vote_average > 0) ?
                                        data.vote_average + '/ 10' :
                                        'Unrated'
                                })
                                </span>
                            </div>
                            <div>
                                <span>{data.release_date != null && data.release_date.slice(0, 4)}</span> |
                                <span>{data.runtime != null && Math.trunc(data.runtime / 60)}hr {Math.trunc(data.runtime % 60)}mins</span> |
                                <span>{
                                    directors.map((x, i) => {
                                        return <span>{x.name}{i === directors.length - 1 ? '' : ', '}</span>
                                    })}</span>
                            </div>
                            <div><strong>Cast:</strong> {data.credits.cast.map((x, i) => {
                                return <span>
                                    {x.name}{i === data.credits.cast.length - 1 ? '' : ', '}
                                </span>
                            })}</div>
                            {
                                data.overview &&
                                <div><strong>Description: </strong>{data.overview}</div>
                            }
                        </div>
                    </div>
            }
            </div>
        </>
    )
}

export default DetailScreen
