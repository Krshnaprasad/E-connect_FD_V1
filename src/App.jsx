import React from 'react'




import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from '../src/Home.jsx'
// import Register from '../src/Register.jsx'
import Login from '../src/Login'
import LandPage from '../src/LandPage.jsx'
import Elearn from '../src/Elearn.jsx'
import Profile from '../src/Profile.jsx'
import HR from '../src/HR.jsx'
import Punchlist from '../src/Punchlist.jsx'
import Request from '../src/Request.jsx'
import Notification from '../src/Notification.jsx'
import './App.css'
import './index.css'
import AdminPanel from '../src/AdminPanel.jsx';



function App() {
  return (
    <>
  

     <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home />}/> */}
        {/* <Route path='/reg' element={<Register/>}/> */}
        <Route path='/' element={<Login/>}/>
        <Route path ='/land' element ={<LandPage/>}/>
        <Route path ='/elearn' element ={<Elearn/>}/>
        <Route path ='/prof' element ={<Profile/>}/>
        <Route path ='/req' element ={<Request/>}/>
        <Route path ='/hr' element ={<HR/>}/>
        <Route path ='/punch' element ={<Punchlist/>}/>
        <Route path ='/not' element={<Notification/>}/>
        <Route path ='/admin' element={<AdminPanel/>}/>
    
      </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
