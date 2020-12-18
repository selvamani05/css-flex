import React,{useState,useEffect} from 'react';
import axios from "axios";
import ProductComponent from "./ProductComponent"


function AxiosPropsProject(props) {

const [data, setData] = useState([]);

useEffect(() => {
  getData();
 
}, [])

function getdata() {
  axios.get('https://jsonplaceholder.typicode.com/todos')
.then(function (response) {
  // handle success
  setData(response.data)
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});
}

return (
    <div>
        {/* <button className="button_todo" onClick={getData}>Get Todo Data</button> */}

        <div className="todo-data">
        {data.map((e,i) => <ProductComponent data={e} key={e.id}/>

        )}
        </div>
        <div>
          {props.e}

        </div>
    </div>
)
}

export default AxiosPropsProject
