import React , { useState }from 'react'

export default function Test1() {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('')

    const [fullName,setFullName] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        setFullName(firstName + lastName)
    }

    return (
        <div>
            <form>
                <input type='text'  value={firstName} onChange={e => {setFirstName(e.target.value)}}/>
                <input type='text' value={lastName} onChange={e => {setLastName(e.target.value)}}/>
                <div>
                    <button onClick={(e) => {handleSubmit(e)}} >Click Hey! ! ! </button>
                </div> 
                <h2>I got the full name of yours...Your name is  - {fullName} </h2>
                <h2>I got the full name of yours...Your lastname is  - {fullName} </h2>
                    {/* <h2>Your last name is  - {lastName} </h2> */}
            </form> 
        </div>
    )
}
