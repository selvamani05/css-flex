import Axios from 'axios'
import React from 'react'
import NameList from './components/NameList'
import AxiosUserData from './components/AxiosUserData'
import MathRandomExample from './components/MathRandomExample'
import AxiosToDo from './components/AxiosToDo'
import AxiosPhotos from './components/AxiosPhotos';
import AxiosPost from './components/AxiosPost' 
 import AntPackage from './components/AntPackage'


function App() {
  return (
    <div>
      
      {/*  <AxiosUserData/>
      <AxiosToDo/>
       <AxiosPhotos/>  */}
        <AxiosPost/>
        {/* <AntPackage/>  */}
    </div>
  )
}

export default App
