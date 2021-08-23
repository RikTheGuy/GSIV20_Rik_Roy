import React, { useState, useEffect } from 'react'
import './index.scss';

const ClampList = ({ list, amount }) => {

    const [expanded, setExpanded] = useState(false)
    const [renderList, setRenderList] = useState([])

    useEffect(() => {
        setRenderList(list.slice(0, amount))
    }, [list, amount])


    const toggleExpand = () => {

        if (expanded) {
            setRenderList(list.slice(0, amount))
        } else {
            setRenderList(list)
        }

        setExpanded(e => !e)
    }

    return (
        <span>
            {renderList.map((x, i) => <span key={i}>{x.name}{i === list.length - 1 ? '' : ', '}</span>)}
            {
                list.length > amount &&
                <span className='expand-button' onClick={toggleExpand}>
                    [{expanded ? 'Show Less' : 'Show More'}]
                </span>
            }
        </span >
    )
}

export default ClampList