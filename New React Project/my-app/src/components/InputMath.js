import React,{useState} from 'react'

function InputMath() {

    const [numberOne, setnumberOne] = useState(0);
    const [numberTwo, setnumberTwo] = useState(0);
    const [sum, setsum] = useState(0);
    const [subract, setSubract] = useState(0);
    const [multiply, setMultiply] = useState(0);
    const [divide,setDivide] = useState(0)
    const [data, setData] = useState()
    const [show, setShow] = useState(true)
    const [toggle, settoggle] =useState(false)

    const addition =() => {
       setsum(parseInt(numberOne) +  parseInt(numberTwo))
       
    }
    const subraction = () => {
        setSubract(parseInt(numberOne) - parseInt(numberTwo))
    }
    const multiplication = () => {
            setMultiply(parseInt(numberOne) * parseInt(numberTwo))
    } 

    const tester =() => {
        setDivide(parseInt(numberOne) / parseInt(numberTwo))
    }

    const wipe = () => {
        setnumberOne([]);
        setnumberTwo([]);
        setsum([]);
        setSubract([]);
        setMultiply([]);
        setDivide([])
    }
    const dataView =() => {
        // setData(setData ? true : false)
        settoggle(true);
        
    }

    

    return (
        <div>
            <input type="number" value={numberOne} onChange={e => setnumberOne(e.target.value)}/>
           
            <input type="number" value={numberTwo} onChange={e => setnumberTwo(e.target.value)}/>

            <button onClick={addition}>Add</button>
            <button onClick={subraction}>sub</button>
            <button onClick={multiplication}>Multiply</button>
            <button onClick={tester}>Divide</button>
            <button onClick={wipe}>Clear Array</button>

            <p>{sum}</p>
            <p>{subract}</p>
            <p>{multiply}</p>
            <p>{divide}</p>

            <input type="text" value={data} onChange={e => {
                setData(e.target.value);
                settoggle(false)
            }}/>
            <p>The text given is{toggle && data}</p>
            <button onClick={dataView}>Display the text</button>
            
        </div>
    )
}

export default InputMath
