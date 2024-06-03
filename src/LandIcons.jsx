import React from 'react'
import {useNavigate} from "react-router-dom"
const LandIcons = () =>{

const navigate = useNavigate();

const learn = () => {
    navigate('/elearn')
}
const profile = () => {
    navigate('/prof')
}
const punch = () => {
    navigate('/punch')
}
const request = () => {
    navigate('/req')
}
const employ = () => {
    navigate('/employ')
}
const hr = () => {
    navigate('/hr')
}
return(
<>
<div class="container-fluid">
    <div class="container">
        <div class="row row-cols-lg-6 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
        <div class="card ldicn  col p-3 m-3">
            <div class="row justify-content-center"><svg  xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16">
            <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
            </svg></div>
            <button onClick={learn} class="ldicn border-0 fs-5 fw-semibold">
                E-learn
            </button>
        </div>
        <div class="card ldicn col p-3 m-3">
            <div class="row justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                </svg>
            </div>
            <button onClick={hr} class="ldicn border-0 fs-5 fw-semibold">
                My HR
            </button>
        </div>
        <div class="card ldicn col p-3 m-3">
            <div class="row justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
            </svg></div>
            <button onClick={request} class="ldicn border-0 fs-5 fw-semibold">
                Requests
            </button>
        </div>
        <div class="card ldicn col p-3 m-3">
            <div class="row justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-hand-index-thumb-fill" viewBox="0 0 16 16">
            <path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716q.113.137.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0"/>
            </svg></div>
            <button onClick={punch} class="ldicn border-0 fs-5 fw-semibold">
                Punchlist
            </button>
        </div>
        <div class="card ldicn col p-3 m-3">
            <div class="row justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg></div>
            <button onClick={profile} class="ldicn border-0 fs-5 fw-semibold">
                Profile
            </button>
        </div>
    </div>
</div>
</div>
</>


)    
}

export default LandIcons;