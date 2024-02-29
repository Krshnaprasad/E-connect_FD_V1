import React,{useState} from 'react'
import Register from '../src/Register'
import Login from '../src/Login'

const Home = () =>{
  const [Reglog, changeComp] = useState(true);

const signin = () => {
  
 changeComp(false);
 console.log(Reglog);
};

const signup = () => {
 changeComp( true);
 console.log(Reglog);
}

  return(
<div>
<div class="container-fluid project" style={{height:"37em"}}>
  <div class="text-end d-md-block pt-3 d-none"><button class="bn fs-5 fw-semibold" type="button" onClick={signup}>Register |</button>&nbsp;&nbsp;<button class="bn fs-5 fw-semibold" type="button" onClick={signin}>Login</button></div>
  <div class="text-center d-block pt-3 d-md-none"><button class="bn fs-5 fw-semibold" type="button" onClick={signup}>Register |</button>&nbsp;&nbsp;<button class="bn fs-5 fw-semibold" type="button" onClick={signin}>Login</button></div>
  { Reglog === true ? <Register/>: <Login/> } 
  <div class="log d-md-block d-none text-center text-white-50 fw-bold" style={{fontSize:"10em"}}>
    <span>E-connect</span>
  </div>
  </div>
  
</div>
 
        


  )
}

export default Home;