import React,{useState} from 'react'

function SimpleForm() {

    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [sex, setsex] = useState('')
    const [salary, setsalary] = useState('')
    const [occupation, setoccupation] = useState('');
    const [Array, setArray] = useState([]);
    const [toggle, setToggle] = useState(false)
    const [caste, setCaste] = useState('')
    const [employee, setemployee] = useState(JSON.parse(localStorage.getItem('myEmp')));
    const [game, setGame] = useState('')
    

    const submitForm = (e) => {
        e.preventDefault();
        let temp = {'name': name, 'age': age, 'sex':sex, 'salary':salary, 'occupation':occupation, 'caste':caste,'game':game }
        setemployee(temp);
        // setemployee({'name': name, 'age': age, 'sex':sex, 'salary':salary, 'occupation':occupation });
        localStorage.setItem('myEmp', JSON.stringify(temp));
        
        }
        const dataView = () => {
            setToggle(true)
        }

        const check = () => {
            if(game == check)
            alert("Boogay")
        }

    
 
   

    return (
    
        <div>
            <form onSubmit={submitForm}>
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
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Trans">Trans</option>
                </select>
                </div>

                <div>
                <label>Salary</label>
                {/* <input type="text" value={salary} onChange= {e => setsalary(e.target.value)}/> */}
                <select onChange= {e => setsalary(e.target.value)}>
                    <option value="Below 1000">Below 1000</option>
                    <option value="Below 2000">Below 2000</option>
                    <option value="Below 5000">Below 5000</option>
                    <option value="Below 10000">Below 10000</option>
                </select>
                </div>

                <div>
                <label>Occupation</label>
                <input type="text" value={occupation} onChange= {e => setoccupation(e.target.value)}/>
                </div>

                <div onChange={e=>  setCaste(e.target.value)}>
                    Caste: 
                    <input type="radio"  name="casteRadio" value="1" id="1"/ > Hindu 
                    <input type="radio" name="casteRadio" value="2" id="2"/>Christia
                    <input type="radio" name="casteRadio" value="3" id="3"/>Muslim
                </div>
                
                <button onClick={submitForm}> Submit</button>

                <div onChange={e => setGame(e.target.value)}>
                <input type="checkbox" value="Doss" id="1" name="scales"/> Doss
                <input type="checkbox" value="Mario" name="scales"/> Mario
                <input type="checkbox" value="Project IGI" id="1"/> Project IGI 

                </div>

                
                
            </form>

            <div>
            The above details are:-
                <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Salary</th>
                        <th>Occupation</th>
                        <th>Caster</th>
                    </tr>
                    {employee && <tr>
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>{employee.sex}</td>
                        <td>{employee.salary}</td>
                        <td>{employee.occupation}</td>
                        <td>{employee.caste}</td>
                    </tr>
                }
                    
                    </tbody>
                </table>
            </div>
        <button >button form</button>

        </div>
    )
}


export default SimpleForm
