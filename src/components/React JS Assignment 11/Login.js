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
      console.log(data)
      if(data.length===0){
        alert("Invalid Username")
      }
      else{
        let result=compareSync(userCredentials.password,data[0].password)
        if(result){
          navigate(`/user-dashboard/${data[0].username}`,{state:data[0]})
        }
        else{
          alert("Invalid Password")
        }
      }
    })
  }
  return (
    <div>
      <h1 className="text-primary text-center bg-primary-subtle mx-5 mt-2 rounded-5 mb-5" style={{padding:"10px"}}>User Login</h1>
      <form style={{backgroundColor:"transparent"}} action="" className="w-50 mx-auto px-5 py-3 border rounded-2" onSubmit={handleSubmit(handleFormSubmit)} >
        <div className="mb-3">
          <label htmlFor="username">Username</label>
        <input type="text" style={{backgroundColor:"transparent",color:"aliceblue"}} className="form-control" id="username" {...register('username',{required:true})} />
        {
          (errors.username?.type==="required")&&<p className="text-danger">Username is mandatory</p>
        }
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
        <input type="password" style={{backgroundColor:"transparent",color:"aliceblue"}} className="form-control" id="password" {...register('password',{required:true})} />
        {
          (errors.password?.type==="required")&&<p className="text-danger">Password is required</p>
        }
        </div>
        <button className="btn btn-success d-block mx-auto" type="submit" >Sign In</button> 
      </form>
      <p className="text-center text-info mt-3">New User? <Link to="/register" >Register</Link></p>
    </div>
  )
}

export default Login