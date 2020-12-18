import React,{useState,useEffect} from 'react'
import axios from "axios";
/* import AxiosPropsImageChild from "./AxiosPropsImageChild"; */
import PaginationProps from "./PaginationProps"
import _ from 'lodash';


function AxiosPropsImagesParent(props) {

const [data, setData] = useState([]);
const [chunks, setChunks]= useState([]);
const [miniChunk, setminiChunk] = useState([])


useEffect(() => {
    getcall()
    }, [])  
    useEffect(() => {
        setChunks(splitArray(data))
    }, [data])

function getcall() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
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
 return _.chunk(temp, 10)
}

const chooseChunk = (e) => {
  setminiChunk(chunks[e])
}

const trial = () => {
    for (let value = 0; value > 5; value++) {
      const element = array[value];
      
    }
}

    return (
        <div>

        {/* The Value here states the array break number ie . we are breaking the array into 5 times. Here 1 indicates arrray of 10 items */}

<button value="0" onClick={e=>{chooseChunk(e.target.value)} }> 1 </button> 

<button value="1" onClick={e=>{chooseChunk(e.target.value)}}>2</button>

<button value="2" onClick={e=>{chooseChunk(e.target.value)}}>3</button>

<button value="3" onClick={e=>{chooseChunk(e.target.value)}}>4</button>

<button value="4" onClick={e=>{chooseChunk(e.target.value)}}>5</button>

        {miniChunk.map((ele, i) => <PaginationProps data={ele} key={i}/>)}
        <div >
            {props.e}
        </div>

        </div>
    )
}

export default AxiosPropsImagesParent
