import React from 'react'
import './index.scss'

const index = () => {
    return (
        <div data-testid='loader' className='loader'>
            <div data-testid='spinner' className='spinner'></div >
            <div data-testid='text'>Loading</div>
        </div>
    )
}

export default index
