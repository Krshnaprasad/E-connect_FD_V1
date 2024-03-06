import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
const AdminPanel = () =>{

    
return(
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
        <div className="row justify-content-center pt-5">
           <div className="col-md-2 d-grid">
           <label>Name: </label>
           <label>Email: </label>
           <label>Mobile: </label>
           <label>Designation: </label> 
           <label>Address: </label>
           <label>Location: </label> 
           <label>City/State: </label>
           <label>Pincode: </label> 
           </div>
           <div className="col-md-2 d-grid">
           <input  type="text"></input>
           <input  type="text"></input> 
           <input  type="number"></input> 
           <input  type="text"></input> 
           <input  type="text"></input> 
           <input  type="text"></input> 
           <input  type="number"></input> 
           </div>
        </div>
            <div className="row text-center pt-3">
                <Form>
                &nbsp;<button style={{width:"9em"}} className="bg-primary p-1 text-white border-0">Submit</button>
                </Form>
            </div>
       
    
      </Tab>
      <Tab eventKey="bank" title="BANK DETAILS">
        Tab content for Profile
      </Tab>
      <Tab eventKey="ctc" title="ATTENDANCE/SALARY DETAILS">
        Tab content for Profile
      </Tab>
      <Tab eventKey="vaccant" title="INTERNAL JOB OPENINGS">
        Tab content for Contact
      </Tab>
      <Tab eventKey="content-tab" title="CTC DETAILS">
        Tab content for Loooonger Tab
      </Tab>
    </Tabs>
        </div>
    </div>
      
    </>
)    
}

export default AdminPanel;