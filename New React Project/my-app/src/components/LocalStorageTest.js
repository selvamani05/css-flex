import React,{useState} from 'react'

function LocalStorageTest() {

    const [name, setName] = useState(localStorage.getItem('myLocal'))
    
    const myFunc = (e) => {
        e.preventDefault();
        localStorage.setItem('myLocal', name)
        
    }

    

        return (
        <div>
        <form onSubmit={myFunc}>
        
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            
           
      {/*       <h2>The name is - {name}</h2> */}

            <button onClick={myFunc}
            
            >Button Click</button>
            

        </form>
        
        </div>
    )
}

export default LocalStorageTest
