import React,{useState} from 'react'

function ArrayExample2() {

        const [myArray, setMyArray] = useState([]);
        const [name, setname] = useState('');
        const [showArr, setShowArr] = useState(false);
      /*   const [clear,setClear] = useState() */


        const populatearray = () => {
            setMyArray([...myArray, name]);
            setname('');
            
        };

       const printArray= () => {
           setShowArr(showArr ? false : true)
       }

       const clearArray = () => {
           setMyArray([]);
        
       }
    return (
        <div>
            <input type="text" value={name} onChange= {e => setname(e.target.value)} />
            <div><button onClick={populatearray}>Add</button></div>
            <div><button onClick={printArray}>{showArr ? "Hide" : "Show"}</button></div>
            <div>You have added {myArray.length} items</div>
        <div><button onClick={clearArray} >Clear Array</button></div>
        {showArr && <div>{myArray.map( (e,i) =><div key={i}>{ e }</div>)}</div>}
        

           

                  
        </div>
    )

}
export default ArrayExample2
