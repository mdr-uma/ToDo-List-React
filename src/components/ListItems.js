import React from 'react'

const ListItems = props => {
    const listItems = props.items.map(item => {
        return (
            <div className="list" key="item.key">
                <p>{item.text}</p>
            </div>
        )
    })

    return(
        <div>{listItems}</div>
    )
}

export default ListItems