import React from 'react';
import ListItems from './components/ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)


class App extends React.Component {
  state = {
    items: [],
    currentItem: {
      text: "",
      key: ""
    }
  }

handleInput = event => {
  this.setState({
    currentItem: {
      text: event.target.value,
      key: Date.now()
    }
  })
}

addItem = event => {
  event.preventDefault()

  const newItem = this.state.currentItem
  if(newItem.text !== "") {
    const newItems = [...this.state.items, newItem]
    this.setState({
      items: newItems,
      currentItem: {
        text: "",
        key: ""
      }
    })
  }
}

deleteItem = key => {
  const filteredItems = this.state.items.filter(item => item.key !== key)
  this.setState({
    items: filteredItems
  })
}

  setUpdate = (text, key) => {
  console.log(key);
  const items = this.state.items.map(item => {
    if(item.key === key){
      item.text = text
    }
    return item
  })
  this.setState({
    items: items
  })
}

  render(){
    return(
      <div className="container">
        <header>
          <h2>ToDo List</h2>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Task" value={this.state.currentItem.text} onChange={this.handleInput}/>
            <button type="submit">Add Item</button>
          </form>
          {/* <p>{this.state.items.text}</p> */}
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        </header>
      </div>
    )
  }
}

export default App;
