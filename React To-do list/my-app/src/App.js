import React from 'react'

function App() {

    const numbers = [1,2,3,4,5]

    const listItems = numbers.map( e=> {
      <li> e </li>
    })
  return (
    <div>
    
      <li>{numbers}</li>
      
    </div>
  )
}

export default App
