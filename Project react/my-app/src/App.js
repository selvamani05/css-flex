import React, { Component } from 'react';
import Ninjas from './Ninjas';

 class App extends Component {
  render() {
    return (
      <div>
        <h1>Hai</h1>
        <Ninjas name="Ryu" age="25" belt="gren" />


        <Ninjas name="rtan" age="25" belt="gren" />
      </div>
    )
  }
}




export default App;
