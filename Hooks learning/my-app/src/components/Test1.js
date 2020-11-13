import React , { useState }from 'react'

export default function Test1() {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <form>
                <input type='text'  value={firstName} onChange={e => {setFirstName(e.target.value)}}/>
                <input type='text' value={lastName} onChange={e => {setLastName(e.target.value)}}/>
                <div>
                    <button onSubmit={(e) => {handleSubmit(e)}} >Click Hey! ! ! </button>
                </div> 
                <h2>Your first name is  - {firstName} </h2>
                    <h2>Your last name is  - {lastName} </h2>
            </form> 
        </div>
    )
}
