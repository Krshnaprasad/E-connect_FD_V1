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
        <div class="card " style={{width:"30em"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={user.img} class="img-fluid rounded-start" alt="..."></img>
    </div>
    <div class="col-md-8 d-grid align-content-center">
      <div class="card-body">
        <h1 class="card-title"></h1>
        <p><span class="fs-6 fw-semibold">Name: </span> <span class="card-text">Dhruv</span></p>
        <p> <span class="fs-6 fw-semibold">Designation: </span> <span class="card-text">Junior Developer</span></p>       
        <button class="border-0 ps-3 pe-3 ldicn" onClick="('checkn')">CheckIn</button>&nbsp;&nbsp;
        <button class="border-0 ps-3 pe-3 ldicn" onClick="('checkot')">CheckOut</button>

      </div>
    </div>
  </div>
</div>
</div>
</>

)    
}

export default ProfilePage;