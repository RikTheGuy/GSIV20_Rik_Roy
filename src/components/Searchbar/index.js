import React from 'react'

import './index.scss'
import 'material-icons/iconfont/filled.css'

const index = ({ query = '', setQuery, onSearch, onCancel }) => {
    return (
        <form data-testid='searchbar' className='searchbar' onSubmit={onSearch}>
            <span className='material-icons icon'>search</span>
            <input id='search-input' type='text' placeholder='Search' value={query} onChange={e => setQuery(e.target.value)} />
            <div className='buttons'>
                <span className='material-icons icon' onClick={onCancel}>clear</span>
                {
                    query.length > 0 &&
                    <span className='material-icons icon' onClick={onSearch}>search</span>
                }
            </div>
        </form>
    )
}

export default index
