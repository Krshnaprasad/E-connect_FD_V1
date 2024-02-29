import React, {useState} from'react'
import {Link} from "react-router-dom"


const Register = () => {

    const [User, setUserData]= useState({
   
    
    name:'',
    email: '',
    phoneno:'',
    password:'',
    confirmpassword:''

    })
    
    const handleChange = (event) => {
        const{name, value} = event.target;
        setUserData({...User, [name]:value})
        console.log(name,value);
       
    
    }

    const handleSubmit = (event) => {
        event.preventDefault()
   
        const UserData={
            
            name:User.name,
            email:User.email,
            phoneno:User.phoneno,
            password:User.password,
            confirmpassword:User.confirmpassword

        }
        fetch("http://localhost:8080/user/set",{
            method:"post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(UserData),
            
        })
        .then((res) =>{
                console.log(res);
        }) 
    console.log(UserData);
    
    }
return(
 
    <div class="container-fluid"> 
    <div class="container">
        <div className="row justify-content-center align-content-center">
        <form class="card mincard p-5 text-white" style={{width:"23em"}}>
        <h1 class="txt fs-2 fw-bold text-center">Register</h1>
        <label class="fnt">Username:</label>
        <input name="name"  type="text" placeholder="Name" value={User.value} onChange={handleChange}></input>
        <label class="fnt">Email:</label>
        <input name="email"  type="text" placeholder="Email"  value={User.value} onChange={handleChange}></input>
        <label class="fnt">Mobile No:</label>
        <input name="phoneno"  type="number" placeholder="Mobile no" value={User.value} onChange={handleChange}></input>
        <label class="fnt">Password:</label>
        <input name="password"  type="password" placeholder="Password"  value={User.value} onChange={handleChange}></input>
        <label class="fnt">Confirm Password:</label>
        <input name="confirmpassword" type="password" placeholder="Confirm password"  value={User.value} onChange={handleChange}></input><br></br>
        
        <button class="butn text-white fw-semibold" onClick={handleSubmit}>Submit</button>
       
        </form>
        </div>
    </div>
    </div>
     
)
}
export default Register;