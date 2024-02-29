import React from 'react'

const ProfilePage = () =>{

const [user]=[
    {
        img:"../src/assets/user.jpg"
    }
]    

return(
<>

<div class="container d-flex justify-content-center">
        <div class="card d-flex justify-content- mb-3" style={{width:"40em"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={user.img} class="img-fluid rounded-start" alt="..."></img>
    </div>
    <div class="col-md-8 d-grid align-content-center">
      <div class="card-body text-center">
        <h1 class="card-title"></h1>
        <p>Name: <span class="card-text">Dhruv</span></p>
        <p>Designation: <span class="card-text">Junior Developer</span></p>       
        <button class="border-0 butn text-white" onClick="('checkn')">CheckIn</button>&nbsp;&nbsp;
        <button class="border-0 butn text-white" onClick="('checkot')">CheckOut</button>

      </div>
    </div>
  </div>
</div>
</div>
</>

)    
}

export default ProfilePage;