import React,{useState} from 'react';
import axios from 'axios';
import { Drawer, Button } from 'antd';

function AxiosPost() {


    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');

    function postCall(event) {
        event.preventDefault();

        if (firstName != "" && lastName != "") {
            axios.post('https://jsonplaceholder.typicode.com/posts', {
                firstName: firstName,
                lastName: lastName
              })
              .then(function (response) {
                alert('Give non empty values')
                setFirstName('')
                setLastName ('')
              })
              .catch(function (error) {
                console.log(error);
              });
            
        } else {
            alert('Give non empty values')
            
        }

        
        
    }
    return (
        <div>
            <button onClick={postCall}> POST CALL </button>

`            <form onSubmit={postCall}>
            <input type='text'  value={firstName} onChange={e => {setFirstName(e.target.value)}}/>
                <input type='text' value={lastName} onChange={e => {setLastName(e.target.value)}}/>
                <input type="submit" value="Submit" />
                
            </form>

            

        </div>
    )
}

export default AxiosPost
