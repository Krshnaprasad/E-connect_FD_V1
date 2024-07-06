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
    <div>
      <div className="row">
      <div className="col" style={{lineHeight:"27px"}}>
                  <label>No of Working days: </label><br></br>
                  <label>No of Holidays: </label><br></br>
                  <label>No of Present: </label><br></br>
                  <label>No of CL/SL: </label><br></br>
                  <label>No of LOPs: </label><br></br>
                  <label>Overall Salary:</label>
                </div>
        <div className="col">
                  <input type="text" name="workingdays" value={attend.workingdays} onChange={handletabChange}></input>
                  <input type="text" name="holidays" value={attend.holidays} onChange={handletabChange}></input>
                  <input type="text" name="present" value={attend.present} onChange={handletabChange}></input>
                  <input type="text" name="cl_sl" value={attend.cl_sl} onChange={handletabChange}></input>
                  <input type="text" name="lop" value={attend.lop} onChange={handletabChange}></input>
                  <input type="text" name="month_salary" value={attend.month_salary} onChange={handletabChange}></input>
        </div>
        <div className='text-center'>
        <div className='text-center pt-5'><button onClick={sub} className='bg-primary text-white border-0 pe-3 p-1 ps-3'>Submit</button>&nbsp;&nbsp;
      </div>
    </div>;
    </div>
    </div>
    )
  };

export default AttendanceDetails;
