import React,{useState} from 'react'
import axios from 'axios'

function AxiosPhotos() {

    const [data, setData] = useState([])

    function getData() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(function (response) {
      setData(response.data)
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

    return (
        <div>
        <div>
            <button className="button_photos"  onClick={getData}> Get Photos </button>
            </div>
            <div>
               {data.map(e => <div className="photos_data">
               <p >Album Id:- {e.albumId}</p>
               <p>Id:- {e.id}</p>
                   <p>Title:- {e.title}</p>
                   <a href={e.url}>Thumbnail URL</a>
                   <img src="https://via.placeholder.com/150/92c952"></img>
                                      

               </div>)}
               </div>
            
        </div>
    )
}

export default AxiosPhotos