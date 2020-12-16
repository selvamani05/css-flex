import React,{useState,useEffect} from 'react'
import axios from "axios";
import AxiosPropsImageChild from "./AxiosPropsImageChild";

function AxiosPropsImagesParent(props) {

const [data, setData] = useState([]);

useEffect(() => {
    getcall()
    }, [])

function getcall() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(function (response) {
    // handle success
    setData(response.data);
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
           {data.map((e,i) => <AxiosPropsImageChild data={e} key={i}/>
            )}
        <div>
            {props.e}
        </div>

        </div>
    )
}

export default AxiosPropsImagesParent
