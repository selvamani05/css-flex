import React,{useState} from 'react'

function IncomeTaxCalculator() {

    const [salary, setSalary] = useState();
    const [result, setresult] = useState();
    const [show, setshow] = useState(false)

    const calculateSlab = () => {
        setshow(true);
        if(salary < 500000) {
        
            console.log("Your salary is below 500000")
            setresult(0)
    } else if(salary > 500001 && salary < 1000000){
        setresult((salary - 500000) * 10/100)
            console.log("Your salary is greater than 500000 but less than 1000000")
        } else {
            setresult((salary - 500000) * 30/100)
            console.log ("Your salary is greater than 1000000")
            
        }
        
    }
    const userSalary = (e) => {
        setSalary(e.target.value);
        setshow(false);
    }

    return (
        <div>
        
            <div>
            <label>Please enter your net income  </label> 
            <br/>
            <br/>
            <input type="number" value={salary} onChange={userSalary}></input>            
            </div>
            <br/>
            <div>
                <button onClick={calculateSlab}>Get Tax</button>
            </div>
            <br/>
            {show &&
            <div>
                Your income tax is {result}
            </div>
            }
        </div>
    )
}

export default IncomeTaxCalculator