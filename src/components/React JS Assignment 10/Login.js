import React from 'react'
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'
import {compareSync} from 'bcryptjs'
import {useNavigate} from 'react-router-dom'
function Login() {
  let navigate=useNavigate()
  let {register,handleSubmit,formState:{errors}}=useForm()

  function handleFormSubmit(userCredentials){
    fetch(`http://localhost:4000/users?username=${userCredentials.username}`,
    {method:"GET"}
    )
    .then(response=>response.json())
    .then(data=>{
      if(data.length===0){
        alert("Invalid Username")
      }
      else{
        let result=compareSync(userCredentials.password,data[0].password)
        if(result){
          navigate("/user-dashboard")
        }
        else{
          alert("Invalid Password")
        }
      }
    })
  }
  return (
    <div>
      <h1 className="display-1 text-primary text-center bg-primary-subtle mx-5 mt-2 rounded-5 mb-5" style={{padding:"10px"}}>User Login</h1>
      <form action="" className="w-50 mx-auto bg-light border rounded-2 px-5 py-3" onSubmit={handleSubmit(handleFormSubmit)} >
        <div className="mb-3">
          <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" {...register('username')} />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" {...register('password')} />
        </div>
        <button className="btn btn-success d-block mx-auto" type="submit" >Sign In</button> 
      </form>
      <p className="text-center text-info mt-3">New User? <Link to="/register" >Register</Link></p>
    </div>
  )
}

export default Login