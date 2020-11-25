import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown/with-html'

function App() {

  const [value,setValue] = useState("");


  return (
    <div className="app">
    <div className="markTextContainer">

      <textarea value={value} onChange={e => setValue(e.target.value)} />
      <ReactMarkdown className="output" source={value} />
    </div>
    </div>
  )
}

export default App
