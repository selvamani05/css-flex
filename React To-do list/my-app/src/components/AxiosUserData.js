import React, {useState} from 'react'
import axios from 'axios'


function Axios() {

  const [data, setdata] = useState([])


  

  function getdata () {

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) { 
      setdata(response.data)
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }


  
    return (

      <div className="container">

<h1 className = "bgcolor">Axios Data</h1>
      
        <div className="data">

        
          <button className="button_props" onClick = {getdata} >Get Users</button> 

          

        <div >

        <div >
          {data.map(e => <div className="userdata"> 
             <p className= "side-heading-fonts">Name :{e.name}</p>
<p className= "side-heading-fonts">UserName :-{e.username}</p>
<p className= "side-heading-fonts">E-mail:- {e.email}</p>
<p className= "side-heading-fonts">Address:-</p>
<p className= "side-heading-fonts">Address:- {e.address.street}</p>
<p className= "side-heading-fonts"> Address.suite:- {e.address.suite}</p>
<p className= "side-heading-fonts"> Address.City:- {e.address.city}</p>
<p className= "side-heading-fonts"> address.zipcode:- {e.address.zipcode}</p>
{/* <p>{e.geo.lat}</p>
<p>{e.geo.lng}</p> */}

<p className= "side-heading-fonts">phone:- {e.phone}</p>
<p className= "side-heading-fonts">website:- {e.website}</p>
<p className= "side-heading-fonts">Company:- </p>
<p className= "side-heading-fonts">company.name:-  {e.company.name}</p>
<p className= "side-heading-fonts">company.catchPhrase{e.company.catchPhrase}</p>
<p className= "side-heading-fonts">company.bs{e.company.bs}</p>



<div className="downspace"></div>
          </div>)}
          </div>

          


        
        
        </div>
        </div>
        </div>
    )
}

export default Axios
