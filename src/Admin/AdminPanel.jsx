import{ useState } from 'react'



const AdminPanel = () => {
 
  
    // --------ADD EMPLOYEE TABLE -----------------------------------
  const [staff, setStaffData] = useState({
    name: '',
    email: '',
    designation: '',
    phoneno: '',
    password: '',
    address:'',
    city:'',
    state:'',
    location:'',
    pincode:'',
    bank:'',
    accountno:'',
    ifsc:'',
    pf:'',
    esi:'',
    branch:''

  })


const handleChange = (event) => {
  const{name, value} = event.target;
  setStaffData({...staff, [name]:value})
  console.log(name,value);
}
const handleNext1 = (event) => {
    setActiveStep((prevStep) => prevStep + 1);
    event.preventDefault()
   
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
          <input type="text" name="address" value={staff.address} onChange={handleChange}></input>
          <input type="text" name="location" value={staff.location} onChange={handleChange}></input>
          <input type="text" name="city" value={staff.city} onChange={handleChange}></input>
          <input type="text" name="state" value={staff.state} onChange={handleChange}></input>
          <input type="text" name="pincode" value={staff.pincode} onChange={handleChange}></input>
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
              <input type="text" name="bank" value={staff.bank} onChange={handleChange}></input>
            <input type="text" name="accountno" value={staff.accountno} onChange={handleChange}></input> 
            <input type="text" name="ifsccode" value={staff.ifsccode} onChange={handleChange}></input> 
            <input type="text" name="branch" value={staff.branch} onChange={handleChange}></input> 
            <input type="text" name="pf" value={staff.pf} onChange={handleChange}></input> 
          <input type="text" name="esi" value={staff.esi} onChange={handleChange}></input> 
        </div>
        <div className='text-center pt-5'>
        <button onClick={handleBack1} className='bg-primary text-white border-0 pe-3 p-1 ps-3'>Back</button>&nbsp;&nbsp;
        <button className='bg-primary text-white border-0 pe-3 p-1 ps-3' onClick={submit}>Submit</button></div>
      </div>
     
    </div>;
  };   
// ------------------ATTENDANCE/CTC------------------------------------------------------




   // ----------JOB OPENINGS ----------------------------------  



//---------ACTUAL CODE---------------------------------------------------------->
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
         
        </div>
      </div>

    </>
  )
}

export default AdminPanel;