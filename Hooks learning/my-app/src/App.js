import React,{useState} from 'react'

function App() {

  const [count,setCount] = useState(29)

  function clicker() {
    setCount(count + 1)
  }



  return (
    <div>
    Count: {count}
      <button onClick = {clicker}>Count</button>
    </div>
  )
}

export default App
