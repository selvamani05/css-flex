import React,{useState} from 'react'

function SimpleForm() {

    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [sex, setsex] = useState('')
    const [salary, setsalary] = useState('')
    const [occupation, setoccupation] = useState('')

    const myfunction = (e) => {
        e.preventDefault();
       // console.log(salary)
/* 
        if(sex == 1){
            console.log('Male gender')
        } else if(sex ==2) {
            console.log('feMale gender')
        } else {
            console.log('transgender')
        } */

        switch (sex) {
            case '1':{
                console.log('Male');
                break;
            }
            case '2':{
                console.log('FeMale');
                break;
            }
            case '3':{
                console.log('Trans');
                break;
            }
            default:{
                break;
            }
        }

        // if(salary == 1){
        //     console.log('your salary is less than 1000')
        // } else if(salary == 2){
        //     console.log('your salary is less than 2000')
        // } else if( salary == 3){
        //     console.log('your salary is less than 5000')
        // } else {
        //     console.log('your salary is less than 10000')
        // }


        switch(salary){
            case 'a':{
                console.log('your salary is less than 1000') 
                break;
            }
            case 'b': {
                console.log('your salary is less than 2000')
                break;
            }
            case 'c':{
                    console.log('your salary is less than 5000') 
                    break;
            }
            case 'd': {
                console.log('your salary is less than 10000') ;
                break;
            }
            default:{
                break;
            }
                
        }
    }

   

    return (
    
        <div>
            <form onSubmit={myfunction}>
                <div>
                <label>Name</label>
                <input type="text" value={name} onChange= {e => setname(e.target.value)} />
                </div>
                
                <div>
                <label>Age</label>
                <input type="number" value={age} onChange= {e => setage(e.target.value)}/>
                </div>

                <div>
                <label>Sex</label>
                {/* <input type="text" value={sex} onChange= {e => setsex(e.target.value)}/> */}
                <select onChange= {e => setsex(e.target.value)}>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Trans</option>
                </select>
                </div>

                <div>
                <label>Salary</label>
                {/* <input type="text" value={salary} onChange= {e => setsalary(e.target.value)}/> */}
                <select onChange= {e => setsalary(e.target.value)}>
                    <option value="a">Below 1000</option>
                    <option value="b">Below 2000</option>
                    <option value="c">Below 5000</option>
                    <option value="d">Below 10000</option>
                </select>
                </div>

                <div>
                <label>Occupation</label>
                <input type="text" value={occupation} onChange= {e => setoccupation(e.target.value)}/>
                </div>

                <button onClick={myfunction}> Submit</button>
                

            </form>
        </div>
    )
}

export default SimpleForm
