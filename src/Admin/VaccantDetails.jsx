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


</>
)    
}

export default VaccantDetails;
