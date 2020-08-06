import React from 'react';
import ListItems from './components/ListItems'

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

  render(){
    return(
      <div className="container">
        <header>
          <h2>ToDo List</h2>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Task" value={this.state.currentItem.text} onChange={this.handleInput}/>
            <button type="submit">Add Item</button>
          </form>
        </header>
        <ListItems items={this.state.items}/>
      </div>
    )
  }
}

export default App;
