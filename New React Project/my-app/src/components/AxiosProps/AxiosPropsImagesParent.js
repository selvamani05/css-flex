import React,{useState,useEffect} from 'react'
import axios from "axios";
import AxiosPropsImageChild from "./AxiosPropsImageChild";
import _ from 'lodash';


function AxiosPropsImagesParent(props) {

const [data, setData] = useState([]);
const [chunks, setChunks]= useState([]);

useEffect(() => {
    getcall()
    }, [])


    useEffect(() => {    
        setChunks(splitArray(data))       
    }, [data])

function getcall() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(function (response) {
    // handle success
    setData(response.data);
    //  setChunks(splitArray(response.data));
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

}

const splitArray = (temp) => {
 return _.chunk(temp, 3);
}


    return (
        <div className="container">

        {chunks.map(e=> (
           <div className="page-border">
           {e.map((ele,i) => <AxiosPropsImageChild data={ele} key={i}/>)}
           </div>
        )  
        
        )}



           {/* {data.map((e,i) => <AxiosPropsImageChild data={e} key={i}/>
            )} */}
        <div >
            {props.e}
        </div>

        </div>
    )
}

export default AxiosPropsImagesParent
