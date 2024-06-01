import { useState } from 'react'

const ProfilePage = () =>{

const [user]=[
    {
        img:"../src/assets/user.jpg"
    }
]    

const [checkIn, setCheckindate] = useState(null)
const [checkOut, setCheckoutdate] = useState(null)

const checkIndate = () => {
var showdate = new Date();
setCheckindate(showdate.getHours()+ ':' +showdate.getMinutes()+':'+showdate.getSeconds())
}
const checkOutdate = () => {
var showdate = new Date();
setCheckoutdate(showdate.getHours()+ ':' +showdate.getMinutes()+':'+showdate.getSeconds())
}



return(
<>

<div className="container-fluid d-flex justify-content-center">
        <div className="card " style={{width:"50em"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={user.img} className="img-fluid rounded-start" alt="..."></img>
    </div>
    <div className="col-md-8 d-grid align-content-center">
      <div className="card-body">
        <h1 className="card-title"></h1>
        <p><span className="fs-6 fw-semibold">Name: </span> <span className="card-text">Dhruv</span></p>
        <p> <span className="fs-6 fw-semibold">Designation: </span> <span className="card-text">Junior Developer</span></p>       
        <button className="border-0 ps-3 pe-3 ldicn" onClick={checkIndate}>CheckIn</button>&nbsp;&nbsp;
        <button className="border-0 ps-3 pe-3 ldicn" onClick={checkOutdate}>CheckOut</button><br></br><br></br>
        <span>CheckIn: {checkIn}</span><br></br>
        <span>CheckOut:{checkOut}</span>
        {/* <p>{date}</p> */}
      </div>
    </div>
  </div>
</div>
</div>
</>

)    
}

export default ProfilePage;