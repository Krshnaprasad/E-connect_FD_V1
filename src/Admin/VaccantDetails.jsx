import{ useState } from 'react'

const VaccantDetails = () =>{
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
        fetch("http://localhost:6060/job/set", {
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
      


return(
<>
<div className="container-fluid">
    <div className="container mt-5  text-center d-flex justify-content-center">
    <div className="row pt-5 card mincard" style={{ width:"350px"}}>
                <div className="col" style={{lineHeight:"20px"}}>
                <label className="fs-4 fw-bolder text-white">Careers</label><br></br><br></br>
                  <input type="text" placeholder='No.of Managers' name="manager" value={job.value} onChange={handleChange1}></input><br></br><br></br>
                  <input type="text" placeholder='No.of Team Lead' name="team_lead"      value={job.value} onChange={handleChange1}></input><br></br><br></br>
                  <input type="text" placeholder='No.of Senior Developers' name="senior_developer" value={job.value} onChange={handleChange1}></input><br></br><br></br>
                  <input type="text" placeholder='No.of Junior Developers' name="junior_developer" value={job.value} onChange={handleChange1}></input><br></br><br></br>
                  <input type="text" placeholder='No.of Frontend Developers' name="frontend_developer" value={job.value} onChange={handleChange1}></input><br></br><br></br>
                  <input type="text" placeholder='No.of Backend Developers' name="backend_developer" value={job.value} onChange={handleChange1}></input><br></br><br></br>
                  <input type="text" placeholder='No.of Training Tutors' name="training_tutors" value={job.value} onChange={handleChange1}></input>
                </div>
                <div className='text-center pt-5 pb-5'>
                <button style={{ width: "9em" }} className="butn p-1 text-white border-0" onClick={jobSubmit}>Submit</button>
                </div>

              </div>
    </div>
</div>



</>
)    
}

export default VaccantDetails;
