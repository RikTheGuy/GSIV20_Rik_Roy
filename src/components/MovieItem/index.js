import React from 'react'
import { Link } from 'react-router-dom'
import Clamp from 'react-multiline-clamp';

import './index.scss'

const index = ({ item }) => {
    return (
        <div className='movie-item'>
            <div className='poster'>
                <Link to={`/${item.id}`}>
                    <img src={item.poster_path ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}` : '/notfound.jpg'} alt={item.title} />
                </Link>
            </div>
            <div className='container'>
                <h4 data-testid='title'><Link to={`/${item.id}`}><Clamp lines={1}>{item.title}</Clamp></Link></h4>
                <h4 data-testid='rating'>{item.vote_average ? item.vote_average : '0'}</h4>
            </div>
            <div data-testid='desc' className='desc'>
                <Clamp withTooltip={false} lines={2}>
                    {item.overview}
                </Clamp>
            </div>
        </div>
    )
}

export default index
