import { useState } from 'react'
import Swal from 'sweetalert2';

const ProfilePage = () => {

  const [user] = [
    {
      img:"../src/assets/user.jpg"
    }
  ]

  const [checkIn, setCheckindate] = useState(null);
  const [checkOut, setCheckoutdate] = useState(null);
  const userId = localStorage.getItem("userId");

  

  const checkIndate = () => {
      var showdate = new Date();
      var checkInTime = showdate.getHours() + ':' + showdate.getMinutes() + ':' + showdate.getSeconds();
      setCheckindate(checkInTime);

      fetch(`http://localhost:6060/punch/checkin/${userId}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ checkIn: checkInTime }),
      })
      .then(response => response.json())
      .then(data => {
         
          console.log('Check-in successful:', data);
          Swal.fire({
            icon: 'success',
            title: 'Check-in successful',
            text: 'You have successfully checked in.',
        });
      })
      .catch((error) => {
          Swal.fire({
              icon: 'error',
              title: 'Check-in failed',
              text: 'There was an error checking in. Please try again.',
          });
          console.error('Error:', error);
      });
  };

  const checkOutdate = () => {
      var showdate = new Date();
      var checkOutTime = showdate.getHours() + ':' + showdate.getMinutes() + ':' + showdate.getSeconds();
      setCheckoutdate(checkOutTime);

      fetch(`http://localhost:6060/punch/checkout/${userId}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ checkOut: checkOutTime }),
      })
      .then(response => response.json())
      .then(data => {
          Swal.fire({
              icon: 'success',
              title: 'Check-out successful',
              text: 'You have successfully checked out.',
          });
          console.log('Check-out successful:', data);
      })
      .catch((error) => {
          Swal.fire({
              icon: 'error',
              title: 'Check-out failed',
              text: 'There was an error checking out. Please try again.',
          });
          console.error('Error:', error);
      });
  };


  return (
    <>

      <div className="container-fluid d-flex justify-content-center">
        <div className="card " style={{ width: "50em" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={user.img} className="img-fluid rounded-start" alt="Img Error"></img>
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