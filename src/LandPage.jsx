import React from 'react'
import ProfilePage from '../src/ProfilePage'
import LandIcons from '../src/LandIcons'
const Landpage = () =>{

return(
<>
<div class="container-fluid project pt-3 pb-3">
       <div class="bar container-fluid d-flex justify-content-between">
             <button class="ofcn border-0 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
         <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
         <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
       </svg></button>
       
       <div class="bar-left offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
         <div class="offcanvas-header d-flex justify-content-around">
           <h3 class="font-style offcanvas-title ps-5 ms-5 fw-bold" id="offcanvasScrollingLabel">E-Connect</h3>
           <span class="closebtn"><button type="button" class="btn-close bg-secondary-subtle" data-bs-dismiss="offcanvas" aria-label="Close"></button></span>
         </div>
         <div class="offcanvas-body pt-5">
           <ul class="list">
             <li><button class="butn" onClick="Home()">Home</button></li>
             <li><button class="butn" onClick="Profile()">Profile</button></li>
             <li><button class="butn" onClick="">Settings</button></li>
             <li><button class="butn" onClick="Logout()">LogOut</button></li>
           </ul>
           <div class="d-flex justify-content-center"><span class="text-white-50">Version 1.1.0</span></div>
         </div>
       </div>
       <div class="pt-2">
         <span class="text-white fs-4 fw-bold">E-Connect</span>
       </div>
       <div class="pt-2">
         <button onClick="reload()" class="border-0 p-2 navlg text-white">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
         <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
         </svg>
         </button>&nbsp;&nbsp;
         <button class="border-0 p-2 navlg text-white">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
         <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
         </svg>
         </button>
       </div>
       </div>
   </div>
   <div class="container-fluid pt-3 pb-3">
    <ProfilePage/>
   </div>
   <div class="container-fluid pt-3 pb-3">
    <LandIcons/>
   </div>
</>
)
}

export default Landpage;