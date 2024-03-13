import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AdminPanel = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [Employees, setEmployee] = useState([])
  const [User, setUserData]= useState({
   
    id:'',
    name:'',
    email: '',
    designation:'',
    phoneno:'',
    password:'',

    })
    
    const handleChangeupd = (event) => {
        const{name, value} = event.target;
        setUserData({...User, [name]:value})
        console.log(name,value);
       
    
    }

    const handleUpdate = (event) => {
        event.preventDefault()
       
        const UserData={
            
            id:User.id,
            name:User.name,
            email:User.email,
            designation:User.designation,
            phoneno:User.phoneno,
            password:User.password,

        }
        fetch(`http://localhost:8080/user/update/${User.id}`,{
            method:"post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(UserData),
            
        })
        .then((res) =>{
                console.log(res);
        })
        .then((data)=>{
            
        })
    console.log(UserData);
    }
  const [staff, setStaffData] = useState({
    name: '',
    email: '',
    designation: '',
    phoneno: '',
    password: '',
  })


const handleChange = (event) => {
  const{name, value} = event.target;
  setStaffData({...staff, [name]:value})
  console.log(name,value);
}
const handleNext1 = (event) => {
    setActiveStep((prevStep) => prevStep + 1);
    event.preventDefault()
    const staffData = {
      name:staff.name,
      email:staff.email,
      designation:staff.designation,
      phoneno:staff.phoneno,
      password:staff.password,
    }
    fetch("http://localhost:8080/user/set", {
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
    console.log(staffData);
  };
  const handleNext2 = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack1 = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const handleBack2 = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (i) => {
    fetch(`http://localhost:8080/user/delete/${i}`, {
      method: "get"
    },
      Employees.splice(i, 1)
    )
  }

  useEffect(() => {
    fetch("http://localhost:8080/user/get"
    ).then(response => response.json())
      .then(data => {

        console.log(data);
        setEmployee(data);

      })

  }, [])
  
const Step1 = () => {
    return <div className="row">
        <div className="col">
          <label>Name: </label> <br></br>
          <label>Email: </label> <br></br>
          <label>Mobile: </label> <br></br>
          <label>Designation: </label>  <br></br>
          <label>Password:</label>
        </div>
        <div className="col">
          <input type="text" name="name" value={staff.name} onChange={handleChange}></input>
          <input type="text" name="email" value={staff.email} onChange={handleChange}></input>
          <input type="text" name="phoneno" value={staff.phoneno} onChange={handleChange}></input>
          <input type="text" name="designation" value={staff.designation} onChange={handleChange}></input>
          <input type="text" name="password" value={staff.password} onChange={handleChange}></input>
        </div>
        <div className='text-center pt-5'><button onClick={handleNext1} className='bg-primary text-white border-0 pe-3 p-1 ps-3'>Continue</button>&nbsp;&nbsp;
        </div>
      </div>
  };

  const Step2 = () => {
    return <div className="row">
        <div className="col">
          <label>Address: </label><br></br>
          <label>Location:</label><br></br>
          <label>City</label> <br></br>
          <label>State</label><br></br>
          <label>Pincode: </label><br></br>
        </div>
        <div className="col">
          <input type="text" name="address" value={user.address} onChange={handleChange}></input>
          <input type="text" name="location" value={user.location} onChange={handleChange}></input>
          <input type="text" name="city" value={user.city} onChange={handleChange}></input>
          <input type="text" name="state" value={user.state} onChange={handleChange}></input>
          <input type="text" name="pincode" value={user.pincode} onChange={handleChange}></input>
        </div>
        <div className='text-center pt-5'><button onClick={handleBack2} className='bg-primary text-white border-0 pe-3 p-1 ps-3'>Back</button>&nbsp;&nbsp;
        <button onClick={handleNext2} className='bg-primary text-white border-0 pe-3 p-1 ps-3'>Continue</button></div>
      </div>
  };

  const Step3 = () => {
    return <div>
      <div className="row">
        <div className="col">
            <label>Bank: </label><br></br>        
            <label>Account No: </label> <br></br>            
            <label>IFSC code: </label>  <br></br>         
            <label>Branch: </label> <br></br>          
            <label>PF: </label>   <br></br>       
            <label>ESI:</label>
        </div>
        <div className="col">
              <input type="text" name="bank" value={user.bank} onChange={handleChange}></input>
            <input type="text" name="accountno" value={user.accountno} onChange={handleChange}></input> 
            <input type="text" name="ifsc" value={user.ifsc} onChange={handleChange}></input> 
            <input type="text" name="branch" value={user.branch} onChange={handleChange}></input> 
            <input type="text" name="pf" value={user.pf} onChange={handleChange}></input> 
          <input type="text" name="esi" value={user.esi} onChange={handleChange}></input> 
        </div>
        <div className='text-center pt-5'>
        <button onClick={handleBack1} className='bg-primary text-white border-0 pe-3 p-1 ps-3'>Back</button>&nbsp;&nbsp;
        <button className='bg-primary text-white border-0 pe-3 p-1 ps-3'>Submit</button></div>
      </div>
     
    </div>;
  };

  const[job,setjobData] = useState({
    manager:'',
    team_lead:'',
    senior_developer:'',
    junior_developer:'',
    frontend_developer:'',
    backend_developer:'',
    training_tutors:''
  })

  const handleChange1 = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setjobData({...job, [name]: value })
    console.log(name, value)

  }

  const jobSubmit = (event) =>{
    event.preventDefault()
    const jobData = {
      manager:job.manager,
      team_lead:job.team_lead,
      senior_developer:job.senior_developer,
      junior_developer:job.junior_developer,
      frontend_developer:job.frontend_developer,
      backend_developer:job.backend_developer,
      training_tutors:job.training_tutors

    }
    fetch("http://localhost:8080/job/set", {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobData),

    })
      .then((res) => {
        console.log(res);
      })
      .then((data) => {
        console.log(data);
      })
    console.log(jobData);
  };
  
// #code---------------------------------------------------------->
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center fs-2 fw-bold">
            <p>ADMIN DASHBOARD</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="employ" title="EMPLOYEE DETAILS">
              <div className="row">
                <Table striped bordered hover>
                  <thead>
                    <tr className='text-center'>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile No</th>
                      <th>Password</th>
                      <th>Edit/Delete</th>
                    </tr>
                  </thead>
                  {Array.isArray(Employees) && Employees.map(employ => (<tbody>
                    <tr>
                      <td>{employ.userid}</td>
                      <td>{employ.name}</td>
                      <td>{employ.email}</td>
                      <td>{employ.phoneno}</td>
                      <td>{employ.password}</td>
                      <td className='text-center'>
                        <button className='border-0' onClick={handleShow}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                          </svg>
                        </button>&nbsp;
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Basic Details</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                          <div className="row justify-content-center">
                            <div className="col">
                              <label>Id:</label><br></br>
                              <label>Name: </label> <br></br>
                              <label>Email: </label> <br></br>
                              <label>Mobile: </label> <br></br>
                              <label>Designation: </label>  <br></br>
                              <label>Password:</label>
                            </div>
                            <div className="col">
                            <input type="text" name="id" value={User.id} onChange={handleChangeupd}></input>

                              <input type="text" name="name" value={User.name} onChange={handleChangeupd}></input>
                              <input type="text" name="email" value={User.email} onChange={handleChangeupd}></input>
                              <input type="text" name="phoneno" value={User.phoneno} onChange={handleChangeupd}></input>
                              <input type="text" name="designation" value={User.designation} onChange={handleChangeupd}></input>
                              <input type="text" name="password" value={User.password} onChange={handleChangeupd}></input>
                            </div>
                            </div>
                            </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button variant="primary" onClick={handleUpdate}>
                              Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>
                        <button className='border-0' onClick={() => handleDelete(employ.userid)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                          </svg>
                        </button> &nbsp;
                        {/* <button className=''>Submit</button> */}
                      </td>
                    </tr>
                  </tbody>
                  ))}
                </Table>
              </div>
            </Tab>
            <Tab eventKey="add" title="ADD EMPLOYEES">

              <div className="container">
              <div className="row d-flex justify-content-center">
              
                <div className="col-md-4 pt-5 d-grid justify-content-center">
                  {activeStep === 1 && <Step1 />}
                  {activeStep === 2 && <Step2 />}
                  {activeStep === 3 && <Step3 />}
                </div>
              </div>
            </div>
            </Tab>
            <Tab eventKey="ctc" title="ATTENDANCE/SALARY DETAILS">
              <div className="row justify-content-center pt-5">
                <p className='text-center fs-4 fw-bold'>Month: March</p>
                <div className="col-md-2 d-grid">
                  <label>No of Working days: </label>
                  <label>No of Holidays: </label>
                  <label>No of Present: </label>
                  <label>No of CL/SL: </label>
                  <label>No of LOP's: </label>
                  <label>Overall Salary:</label>
                </div>
                <div className="col-md-2 d-grid">
                  <input type="text"></input>
                  <input type="text"></input>
                  <input type="text"></input>
                  <input type="text"></input>
                  <input type="text"></input>
                </div>
              </div>
              <div className="row text-center pt-3">
                <Form>
                  &nbsp;<button style={{ width: "9em" }} className="bg-primary p-1 text-white border-0">Submit</button>
                </Form>
              </div>
            </Tab>
            <Tab eventKey="vaccant" title="JOB OPENINGS">
              <div className="row justify-content-center pt-5">
                <div className="col-md-2 d-grid">
                  <label>Manager: </label>
                  <label>Team Lead: </label>
                  <label>Senior Developer: </label>
                  <label>Junior Developer: </label>
                  <label>FrontEnd Developer: </label>
                  <label>BackEnd Developer: </label>
                  <label>Training Tutors: </label>
                </div>
                <div className="col-md-2 d-grid">
                  <input type="text" name="manager" value={job.value} onChange={handleChange1}></input>
                  <input type="text" name="team_lead"      value={job.value} onChange={handleChange1}></input>
                  <input type="text" name="senior_developer" value={job.value} onChange={handleChange1}></input>
                  <input type="text" name="junior_developer" value={job.value} onChange={handleChange1}></input>
                  <input type="text" name="frontend_developer" value={job.value} onChange={handleChange1}></input>
                  <input type="text" name="backend_developer" value={job.value} onChange={handleChange1}></input>
                  <input type="text" name="training_tutors" value={job.value} onChange={handleChange1}></input>
                </div>
                <div className='text-center pt-5'>
                <button style={{ width: "9em" }} className="bg-primary p-1 text-white border-0" onClick={jobSubmit}>Submit</button>
                </div>

              </div>
            </Tab>
            <Tab eventKey="content-tab" title="CTC DETAILS">
              <div className="row justify-content-center pt-5">
                <div className="col-md-2 d-grid">
                  <label>CTC:</label>
                  <label>Basic Salary: </label>
                  <label>Travel Allowance: </label>
                  <label>Food Allowance: </label>
                  <label>PF: </label>
                  <label>ESI: </label>
                  <label>Overall Salary: </label>
                </div>
                <div className="col-md-2 d-grid">
                  <input type="text"></input>
                  <input type="text"></input>
                  <input type="text"></input>
                  <input type="text"></input>
                  <input type="text"></input>
                  <input type="text"></input>
                  <input type="text"></input>
                  <input type="text"></input>
                </div>
              </div>
              <div className="row text-center pt-3">
                <Form>
                  &nbsp;<button style={{ width: "9em" }} className="bg-primary p-1 text-white border-0">Submit</button>
                </Form>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>

    </>
  )
}

export default AdminPanel;