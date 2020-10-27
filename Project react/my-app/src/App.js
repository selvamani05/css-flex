import React, { Component } from 'react'
import Ninjas from './Ninjas';


class App extends Component {
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Rome', age: 25, belt: 'blue', id: 2 },
      { name: 'Regal', age: 45, belt: 'benn', id: 3 },

    ]

  }
  render() {
    return (
      <div className="App">
      <h1>My react app</h1>
      <p>Welcome !!!</p>
      <Ninjas ninjas={this.state.ninjas}/>
        
      </div>
    )
  }
}


export default App;
