import React from 'react'
import './index.scss'

const index = ({ message = '', danger = false }) => {
    return (
        <div data-testid='message' className={`message ${danger && 'danger'}`}>
            {message}
        </div>
    )
}

export default index
