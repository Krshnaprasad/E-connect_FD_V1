import{ useState } from 'react'


const SalaryDetails = () =>{
    const[ctc, setCtcData] = useState({
       
          ctc:'',
          basic_salary:'',
          ta:'',
          fa:'',
          pf:'',
          esi:'',
          overall_salary:''
      
      })

      const handletabChange = (event) => {
        event.preventDefault();
        const{name, value} = event.target;
        setCtcData({...ctc, [name]:value})
        console.log(name,value);
      }
      
      const sub = (event) => {
        event.preventDefault()
        const ctcData = {
          ctc:ctc.ctc,
          basic_salary:ctc.basic_salary,
          ta:ctc.ta,
          fa:ctc.fa,
          pf:ctc.pf,
          esi:ctc.esi,
          overall_salary:ctc.overall_salary
         }
         
        
        fetch("", {
          method: "post",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(ctcData),
      
        })
          .then((res) => {
            console.log(res);
          })
          .then((data) => {
            console.log(data);
          })
        console.log(ctcData);
      }

return(
<>
<div className="row">
        <div className="col" style={{lineHeight:"28px"}}>
                  <label>CTC:</label><br></br>
                  <label>Basic Salary: </label><br></br>
                  <label>Travel Allowance: </label><br></br>
                  <label>Food Allowance: </label><br></br>
                  <label>PF: </label><br></br>
                  <label>ESI: </label><br></br>
                  <label>Overall Salary: </label>
        </div>
        <div className="col">
                  <input type="text" name="ctc" value={ctc.ctc} onChange={handletabChange}></input>
                  <input type="text" name="basic_salary" value={ctc.basic_salary} onChange={handletabChange}></input>
                  <input type="text" name="ta" value={ctc.ta} onChange={handletabChange}></input>
                  <input type="text" name="fa" value={ctc.fa} onChange={handletabChange}></input>
                  <input type="text" name="pf" value={ctc.pf} onChange={handletabChange}></input>
                  <input type="text" name="esi" value={ctc.esi} onChange={handletabChange}></input>
                  <input type="text" name="overall_salary" value={ctc.overall_salary} onChange={handletabChange}></input>
        </div>
        <div className='text-center pt-5'>
        <button className='bg-primary text-white border-0 pe-3 p-1 ps-3' onClick={sub}>Submit</button></div>
      </div>



</>
)

}
export default SalaryDetails;