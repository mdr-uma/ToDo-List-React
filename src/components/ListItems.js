import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListItems = props => {
    const listItems = props.items.map(item => {
        return (
            <div className="list" key={item.key}>
                <p>
                    <input type="text" id={item.key} value={item.text} onChange={(e) => {
                        props.setUpdate(e.target.value, item.key)
                    }} />
                    <span>
                        <FontAwesomeIcon className='faicons' icon='trash' onClick={() => props.deleteItem(item.key)} />
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