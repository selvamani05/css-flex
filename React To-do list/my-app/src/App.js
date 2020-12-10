import Axios from 'axios'
import React from 'react'
import NameList from './components/NameList'
import AxiosUserData from './components/AxiosUserData'
import MathRandomExample from './components/MathRandomExample'
import AxiosToDo from './components/AxiosToDo'
import AxiosPhotos from './components/AxiosPhotos';
import AxiosPost from './components/AxiosPost' 
 import AntPackage from './components/AntPackage'
 import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>

<nav>
          <ul>
            <li>
              <Link to="/">Hey </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
            <Link to="/package">My package</Link>
            </li>

            <li>
            <Link to="/post">My post</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
          <AxiosUserData/>
          </Route>
          <Route path="/users">
          <AxiosToDo/>
          </Route>

          <Route path="/post">
          <AxiosPost/>
          </Route>
          <Route path="/package">
          <AntPackage/>
          </Route>

          <Route path="/">
          <AxiosPhotos/>
          </Route>

          
        </Switch>
      
          </div>
  )
}

export default App
