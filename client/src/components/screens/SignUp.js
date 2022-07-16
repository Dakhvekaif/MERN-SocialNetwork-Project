import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function SignUp() {
  const [name,setName] =useState("");
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");

  const PostData = () => {
    fetch("signup", {
      method:"post",
      header:{
        "content-Type":"application/json"
      },
      body:JSON.stringify({
        name:"",
        password:"",
        email:""
      })
    }).then(res=>res.json())
    .then(data=>{
      // if(data.error)
    })
  }

  return (
    <div className='mycard'>
      <div className='card auth-card'>
        <h2>InstaBook</h2>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value) } />
        <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value) } />
        <input type="text" placeholder= 'Password' value={password} onChange={(e) => setPassword(e.target.value) } />
        <button className="btn waves-effect waves-light" onClick={()=>PostData() }>Sign Up</button>
        <h5><Link to="/SignIn">Already have an account?</Link></h5>
      </div>
    </div>
  )
}

export default SignUp