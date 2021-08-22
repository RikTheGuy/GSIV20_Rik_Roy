import React from 'react'

import './index.scss'
import 'material-icons/iconfont/filled.css'

const index = () => {
    return (
        <div data-testid='searchbar' className='searchbar'>
            <span className='material-icons icon'>search</span>
            <input id='search-input' type='text' placeholder='Search' />
        </div>
    )
}

export default index
