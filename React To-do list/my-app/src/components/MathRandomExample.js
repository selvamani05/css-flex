import React,{useState} from 'react'

function MathRandomExample() {

    const [randomNum, setrandomNum] = useState()

    function generaterandom() {

        setrandomNum(Math.random())
        
    }


    return (


        <div>
            <button onClick= {generaterandom}>get random</button>
            <p> {randomNum} </p>
        </div>
    )
}

export default MathRandomExample
