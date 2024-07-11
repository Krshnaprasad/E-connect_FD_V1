import { useState } from 'react'
import Nav from 'react-bootstrap/Nav';

const AdminPanel = () => {


  // --------ADD EMPLOYEE TABLE -----------------------------------
  const [staff, setStaffData] = useState({
    name: '',
    email: '',
    designation: '',
    phoneno: '',
    password: '',
    address: '',
    city: '',
    state: '',
    location: '',
    pincode: '',
    bank: '',
    accountno: '',
    ifsc: '',
    pf: '',
    esi: '',
    branch: ''

  })


  const handleChange = (event) => {
    const { name, value } = event.target;
    setStaffData({ ...staff, [name]: value })
    console.log(name, value);
  }

  const submit = () => {
    const staffData = {
      name: staff.name,
      email: staff.email,
      designation: staff.designation,
      phoneno: staff.phoneno,
      password: staff.password,
      address: [ // Sending addresses as an array
        {
          address: staff.address,
          location: staff.location,
          city: staff.city,
          state: staff.state,
          pincode: staff.pincode,
        }
      ],
      bank: [
        {
          bank: staff.bank,
          ifsccode: staff.ifsccode,
          pf: staff.pf,
          esi: staff.esi,
          branch: staff.branch,
          accountno: staff.accountno
        }
      ]
    };

    fetch("http://localhost:6060/user/set", {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(staffData),
    })
      .then((res) => {
        console.log(res);
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    console.log(staffData);
  }



  // ------------------ATTENDANCE/CTC------------------------------------------------------




  // ----------JOB OPENINGS ----------------------------------  



  //---------ACTUAL CODE---------------------------------------------------------->
  return (
    <>
      <div className="container-fluid pt-3">
        <div className="container">
          <div className="text-center fs-3 fw-bold">
            <p>ADMIN DASHBOARD</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
        <Nav fill variant="tabs">
      <Nav.Item>
        <Nav.Link href="/admin/employ">Employees</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/admin">Add Employees</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/admin/attend">Attendance</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/admin/ctc" >Salary</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="admin/vaccant" >Job openings</Nav.Link>
      </Nav.Item>
    </Nav>
        </div>
      </div>
      <div className="container-fluid pt-3">
        <div className="container card mincard">
          <div className="row text-center pt-5">
          <label className="fs-4 fw-bolder text-white">ADD USERS</label><br></br><br></br>
            <div className="col-lg-4 pt-3" style={{lineHeight:"20px"}}>
           
              <input type="text" placeholder='Enter your name' name="name" value={staff.name} onChange={handleChange}></input><br></br><br></br>
              <input type="text" placeholder='Enter your email' name="email" value={staff.email} onChange={handleChange}></input><br></br><br></br>
              <input type="text" placeholder='Enter your mobile' name="phoneno" value={staff.phoneno} onChange={handleChange}></input><br></br><br></br>
              <input type="text" placeholder='Designation' name="designation" value={staff.designation} onChange={handleChange}></input><br></br><br></br>
              <input type="text" placeholder='Set Password' name="password" value={staff.password} onChange={handleChange}></input><br></br><br></br>
            </div>
            <div className="col-lg-4 pt-3" style={{lineHeight:"20px"}}>
              <input type="text" placeholder='Enter your address' name="address" value={staff.address} onChange={handleChange}></input><br></br><br></br>
              <input type="text" placeholder='Enter your location' name="location" value={staff.location} onChange={handleChange}></input><br></br><br></br>
              <input type="text" placeholder='Enter your city' name="city" value={staff.city} onChange={handleChange}></input><br></br><br></br>
              <input type="text" placeholder='Enter your state' name="state" value={staff.state} onChange={handleChange}></input><br></br><br></br>
              <input type="text" placeholder='Enter your pincode' name="pincode" value={staff.pincode} onChange={handleChange}></input><br></br><br></br>
            </div>
            <div className="col-lg-4" style={{lineHeight:"20px"}}>
              <input type="text" placeholder='Enter your bank' name="bank" value={staff.bank} onChange={handleChange}></input><br></br><br></br>
              <input type="text" placeholder='Enter your AccountNo' name="accountno" value={staff.accountno} onChange={handleChange}></input><br></br><br></br>
              <input type="text" placeholder='Enter your IFSC code' name="ifsccode" value={staff.ifsccode} onChange={handleChange}></input><br></br><br></br>
              <input type="text" placeholder='Enter your branch' name="branch" value={staff.branch} onChange={handleChange}></input><br></br><br></br>
              <input type="text" placeholder='PF' name="pf" value={staff.pf} onChange={handleChange}></input><br></br><br></br>
              <input type="text" placeholder='ESI' name="esi" value={staff.esi} onChange={handleChange}></input>
            </div>
          </div>
          <button className="p-2 butn mt-3 mb-3 fw-semibold text-white" onClick={submit}>Submit</button>
        </div>
      </div>


    </>
  )
}

export default AdminPanel;