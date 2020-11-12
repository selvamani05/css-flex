import React, {useState} from 'react'

 function DisplayName() {

     const [name, setname] = useState('');
     

     function handleChange(e) {
        setname(e.target.value)
     }
    return (
        <div>
            <input  type="text" value={name}  onChange={(e) => handleChange(e)} />       
            {name}
        </div>

    )
}

export default  DisplayName