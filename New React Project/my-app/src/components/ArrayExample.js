import React,{useState} from 'react'

function ArrayExample() {

    const [data, setData] = useState([])
    const [arr, setArr] = useState();

    const populatearray = (e) => {
        let newArr = arr;
        newArr.push(data)
        setArr(newArr);
        
    }

    const printArray = (e) => {
        console.log(arr);
    }

    

    return (
        <div>
        <input type="text" value={data} onChange={e => setData(e.target.value)}/>
        <div><button onClick={populatearray}>Add</button></div>
        <div><button onClick={printArray}>Print</button></div>
        <div><button>Clear Array</button></div>
            
            
            
        </div>
    )
}

export default ArrayExample
