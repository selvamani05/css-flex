import React,{useState, useEffect} from 'react'

function useState tutorial() {

    const [state, setstate] = useState(0);
const [time, setTime] = useState(0);

//This useEffect is rendered only 1 time while the page is loaded/rendered //

  useEffect(() => {
    console.log('called1 time')
  }, []);

  //This useEffect is rendered each time the state function is chcnged or the time functon is changed//
  //The state function will alert only once till 3 and also will update more than 3//
  //The time also same like aboe//
//No interference between state and time function//

  useEffect(() => {
    console.log('state changed')
    if(state===3) {
      alert('3 times clicked')
    }

    if(time===5) {
      alert('5 times clicked')
    }
  }, [state, time])


  // This without [] is loaded each time when the page is re-rendered//
  useEffect(() => {
    console.log('always called time')
  })

  function abbb() {
    console.log('fbb clicked time');
    setstate(state+1);
  }
    return (
        <div>
            <button onClick={abbb}>click me {state}</button>
    <button onClick={()=>setTime(time+1)}>time me {time}</button>
        </div>
    )
}

export default useState tutorial
