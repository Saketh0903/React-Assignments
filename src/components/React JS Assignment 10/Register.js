import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate,Link} from 'react-router-dom'
import {hashSync} from 'bcryptjs'
function Register() {

  let {register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate()

  function handleFormSubmit(newUser){
    let hashedPassword=hashSync(newUser.password,5)
    newUser.password=hashedPassword
    fetch('http://localhost:4000/users',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(newUser)
    })
    .then(response=>{
      if(response.status===201){
        navigate('/login')
      }
    })
    .catch(err=>console.log("err in registration",err))
  }
  return (
    <div>
      <h1 className="display-1 text-info text-center bg-info-subtle mx-5 mt-2 mb-5 rounded-5" style={{padding:"10px"}}>User Registration</h1>
      <form action="" className="w-50 mx-auto bg-light border rounded-2 px-5 py-3" onSubmit={handleSubmit(handleFormSubmit)} >
        <div className="mb-3">
          <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" {...register('username')}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email">EmailID</label>
        <input type="email" className="form-control" id="email" {...register('email')}/>
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" {...register('password')} />
        </div>
        <button className="btn btn-success d-block mx-auto" type="submit">Register</button>
      </form>
      <p className="text-center text-info mt-3">Already Registered? <Link to="/login" >Login</Link></p>
    </div>
  )
}

export default Register