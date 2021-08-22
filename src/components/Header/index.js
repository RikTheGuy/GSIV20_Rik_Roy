import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar/index.js'

import './index.scss'
import 'material-icons/iconfont/filled.css'

const index = ({ title = 'Title', searchbar = false, query, setQuery, onSearch, onCancel }) => {
    return (
        <header className='header'>
            <nav>
                <div data-testid='title' className='title'>
                    {
                        searchbar ?
                            <Searchbar query={query} setQuery={setQuery} onSearch={onSearch} onCancel={onCancel} /> :
                            <h4>{title}</h4>
                    }
                </div>
                <Link to='/'>
                    <span className="material-icons home-icon">home</span>
                </Link>
            </nav>
        </header>
    )
}

export default index
