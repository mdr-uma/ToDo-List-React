import React from 'react';
import './App.css'

class App extends React.Component {
  state = {
    items: [],
    currentItem: {
      text: "",
      key: ""
    }
  }
  render(){
    return(
      <div className="container">
        <header>
          <h2>ToDo List</h2>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Text" value={this.state.currentItem.text} onChange={this.handleInput}/>
            <button type="submit">Add Item</button>
          </form>
        </header>
      </div>
    )
  }
}

export default App;
