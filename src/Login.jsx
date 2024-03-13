import React, {useState} from'react'
import {useNavigate} from "react-router-dom"

const Login = () => {

    const navigate = useNavigate();

    const [User, setUserData]= useState({   
    name: '',
    password:'',
    check:''
    })

    const handleChange = (event) => {
        event.preventDefault();
        const{name, value} = event.target;
        setUserData({...User, [name]:value})
        console.log(name,value);
       
    
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const userData={
            
           
            name:User.name,
            check:User.check,
            password:User.password,
           

        }
        fetch("http://localhost:8080/user/check",{
            method:"POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(userData)
        })
        .then((response) =>{
            if(!response.ok){
                throw new error("Failed to Fetch data");
            }
            else {
                console.log(response);
                return response.json(),
                navigate("/land")
            }  
        }) 
        .then((data)=>{
            console.log(data);
            let user = localStorage.setItem("name",data.name);
            console.log(data.name);
        })
    }

 return(  
    <>
    <div class="container-fluid pt-3 pb-3" style={{height:"3em"}}> 
                    <div class="container">
                        <div className="row pt-5 justify-content-center">
                        <form class="card mincard p-5 text-white" style={{width:"20em"}} onSubmit={handleSubmit}>
                        <h1 class="txt fs-2 fw-bold text-center">Login</h1>
                        <label class="fnt">Name:</label>
                        <input type="text" name="name" placeholder="name" value={User.value} onChange={handleChange}></input><br></br>
                       
                        <label class="fnt">Password:</label>
                        <input type="password" name="password" placeholder="Password" value={User.value} onChange={handleChange}></input><br></br>
                       
                        <div>
                        <input value={User.value} class="form-check-input" name="check" type="checkbox" role="switch" onChange={handleChange}></input><label class="txt" for="flexSwitchCheckChecked">Remember me</label><br></br><br></br>
                        
                        </div>
                        <button class="butn text-white fs-5 fw-semibold">Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
              </>
 )
}

    export default Login;
        
//         // methods:{
//         //     func(){
               
//         //         if(this.email=="kcha@gmail.com" && this.password=="12345" && this.check==true){
//         //             this.$router.push('/home')
//         //         }
//         //         else{
//         //             this.hint=true
//         //          }
//         //     }
//         // }