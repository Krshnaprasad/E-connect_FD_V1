import{ useState } from 'react'


const AttendanceDetails = () => {
   
    const[attend, setAttendData] = useState({
        workingdays:'',
        holidays:'',
        present:'',
        cl_sl:'',
        lop:'',
        month_salary:'',
      })
      
      const handletabChange = (event) => {
        event.preventDefault();
        const{name, value} = event.target;
        setAttendData({...attend, [name]:value})
        console.log(name,value);
      }
      
     

        const sub = (event) => {
            event.preventDefault()
            const attendData = {
             workingdays:attend.workingdays,
             holidays:attend.holidays,
             present:attend.present,
             cl_sl:attend.cl_sl,
             lop:attend.lop,
             month_salary:attend.month_salary,
             
            }
            fetch("http://localhost:6060/attend/set", {
              method: "post",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(attendData),
          
            })
              .then((res) => {
                console.log(res);
              })
              .then((data) => {
                console.log(data);
              })
            console.log(attendData);
           }  


    return (
    <div className='container-fluid'>
      <div className="container pt-5 pb-5 text-center d-flex justify-content-center">
      <div className="row card mincard" style={{ width:"350px"}}>
        <div className="col  mt-5"  style={{lineHeight:"20px"}} >
                  <label className="mb-5 fs-4 fw-bolder text-white">Attendance Details </label><br></br>
                  <input type="text" placeholder="No.of. Working Days" name="workingdays" value={attend.workingdays} onChange={handletabChange}></input><br></br><br></br>
                  <input type="text" placeholder="No.of. Present" name="holidays" value={attend.holidays} onChange={handletabChange}></input><br></br><br></br>
                  <input type="text" placeholder="No.of. Holidays" name="present" value={attend.present} onChange={handletabChange}></input><br></br><br></br>
                  <input type="text" placeholder="No.of. CL/SL" name="cl_sl" value={attend.cl_sl} onChange={handletabChange}></input><br></br><br></br>
                  <input type="text" placeholder="No.of. LOP's" name="lop" value={attend.lop} onChange={handletabChange}></input><br></br><br></br>
                  <input type="text" placeholder="Overall Salary" name="month_salary" value={attend.month_salary} onChange={handletabChange}></input>
        </div>
        <div className='text-center'>
        <div className='text-center pt-5 pb-5'><button onClick={sub} className='butn bg-primary text-white border-0 ps-5 pe-5 p-2'>Submit</button>&nbsp;&nbsp;
      </div>
    </div>
    </div>
      </div>
     
    </div>
    )
  };

export default AttendanceDetails;
