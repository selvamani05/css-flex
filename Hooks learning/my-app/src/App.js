import React, { useState } from 'react'
import Test1 from './components/Test1'
function App() {

  const [name,setName] = useState({firstName:'',lastName:''})

 

  return (
    <div>
   {/* <form>
<input type='text' value={name.firstName} onChange={e => setName({firstName: e.target.value})}/>
<input type='text' value={name.lastName} onChange={e => setName({lastName: e.target.value})}/>
<div>
<button onSubmit={() => setName()} >Click Hey! ! ! </button>
</div>



<h2>Your first name is  - {name.firstName} </h2>
<h2>Your last name is  - {name.lastName} </h2>



   </form> */}
   <Test1/>
    </div>
  )
}

export default App
