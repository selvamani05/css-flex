import React, {useState, useEffect} from 'react'

 function UseEffectTest() {

     const [name, setname] = useState('');
     const [dummyName, setDummyName] = useState('');
     
     useEffect(() => {
       setDummyName(name + 'poda dei') 

         
     }, [name])

     function handleChange(e) {
        setname(e.target.value)
     }
    return (
        <div>
            <input  type="text" value={name}  onChange={(e) => handleChange(e)} />       
            
            <div>
                USer entered name is { name } and dummy name is { dummyName}
            </div>
        </div>

    )
}

export default  UseEffectTest