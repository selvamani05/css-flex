import React,{useState,useEffect} from 'react'
import "./App.css"

const App = () => {

  const API_KEY = "6b8ef1a0bf1d4972bf5ce468aa674141";
  const [search,setSearch] = useState("");
  const [image,setImage] = useState("");
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);
  const URL = `https://api.apiflash.com/v1/urltoimage?access_key=${API_KEY}&url=${search}&full_page="true"&fresh="true"`;

  const getScreenShots = async () = > {

      setSearch("");
      setError(false);
      setLoading(true)

    const response = await fetch(URL);
    if(response.ok) {
      setImg(response);
      setLoading(false);
    }else{
        setError(true);
      }
    }
  

  const searchScreenshots = e => {
    e.preventDefault();
  }

  useEffect(() => {
    setSearch('');
    getScreenShots();
  },[])



  return (
    <div className="App">
      <nav>
        <div className="container">
          <form onSubmit={searchScreenshots}>
          <input autoFocus type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
          <button type="submit">Take Screenshot</button>
          </form>
        </div>
      </nav>

      <div className="hero">
        {! loading && !error
        
        <div className="container">
        {img && (
          <a href={img.url} target="-blank">
          <img src={img.url} alt="background"/></a>
        )}
        </div>
        ) : ! error && loading ? (
          <div className="loading"></div>
        ) : error  ? (
          <div className="container">
            <h2>Please enter a valid url</h2>

          </div> 
        ) : (
          ""


        )
        }




      </div>

    </div>
  )
}

export default App
