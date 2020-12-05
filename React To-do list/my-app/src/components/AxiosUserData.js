import React, {useState} from 'react';
import axios from 'axios';
import { BackTop } from 'antd';
import { Card } from 'antd';


const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
  
};




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
        <div style={{ height: '600vh', padding: 8 }}>

          {data.map(e => <div className="userdata"> 

          <div className="site-card-border-less-wrapper">
    <Card title="Card title"bordered={false} style={{ width: 300 }}>
    <p className= "side-heading-fonts">Name :{e.name}</p>
    <p className= "side-heading-fonts">Name :{e.name}</p>
<p className= "side-heading-fonts">UserName :-{e.username}</p>
<p className= "side-heading-fonts">E-mail:- {e.email}</p>
<p className= "side-heading-fonts">Address:-</p>
<p className= "side-heading-fonts">Address:- {e.address.street}</p>
<p className= "side-heading-fonts"> Address.suite:- {e.address.suite}</p>
<p className= "side-heading-fonts"> Address.City:- {e.address.city}</p>
<p className= "side-heading-fonts"> address.zipcode:- {e.address.zipcode}</p>
<p className= "side-heading-fonts">phone:- {e.phone}</p>
<p className= "side-heading-fonts">website:- {e.website}</p>
<p className= "side-heading-fonts">Company:- </p>
<p className= "side-heading-fonts">company.name:-  {e.company.name}</p>
<p className= "side-heading-fonts">company.catchPhrase{e.company.catchPhrase}</p>
<p className= "side-heading-fonts">company.bs{e.company.bs}</p>
    </Card>
  </div>
             
<div className="downspace"></div>


          </div>)}

          <BackTop>
      <div style={style}>UP</div>
    </BackTop>
          </div>
</div>
          


        
        
        </div>
        </div>

        


        </div>
    )
}

export default Axios
