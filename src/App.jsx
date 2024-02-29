import React from 'react'




import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/Home.jsx'
import Register from '../src/Register.jsx'
import Login from '../src/Login'
import LandPage from '../src/LandPage.jsx'
import ProfilePage from '../src/ProfilePage.jsx'
import './App.css'
import './index.css'


function App() {
  return (
    <>
  

     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/reg' element={<Register/>}/>
        <Route path='/log' element={<Login/>}/>
        <Route path ='/land' element ={<LandPage/>}/>
        <Route path ='/prof' element ={<ProfilePage/>}/>
      </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
