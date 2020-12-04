import React,{useState} from 'react'
import axios from 'axios'

function AxiosToDo() {

    const [data, setData] = useState([])

        function getData() {
            axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
      setData(response.data)
    // handle success
    console.log(response);
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
            <button className="button_todo" onClick={getData}>Get Todo Data</button>
            <div className="todo-data">
            {data.map(e => <div>
                <p className= "side-heading-fonts">UserName :-{e.userId}</p>
                <p className= "side-heading-fonts">Id :-{e.id}</p>
                <p className= "side-heading-fonts">Title :-{e.title}</p>

                <div className="downspace-todo"></div>
                
          
                

                
                    

            </div> )}
            </div>
        </div>
    )
}

export default AxiosToDo
