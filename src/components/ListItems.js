import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListItems = props => {
    const listItems = props.items.map(item => {
        return (
            <div className="list" key="item.key">
                <p>{item.text}
                    <span>
                        <FontAwesomeIcon className='faicons' icon='trash' />
                    </span>
                </p>
            </div>
        )
    })

    return(
        <div>{listItems}</div>
    )
}

export default ListItems