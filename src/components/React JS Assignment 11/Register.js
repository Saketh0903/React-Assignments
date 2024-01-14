import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { hashSync } from 'bcryptjs'
function Register() {

  let { register, handleSubmit, formState: { errors } } = useForm()
  let navigate = useNavigate()

  function handleFormSubmit(newUser) {
    let hashedPassword = hashSync(newUser.password, 5)
    newUser.password = hashedPassword
    fetch('http://localhost:4000/users', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    })
      .then(response => {
        if (response.status === 201) {
          navigate('/login')
        }
      })
      .catch(err => console.log("err in registration", err))
  }
  return (
    <div>
      <h1 className="text-info text-center bg-info-subtle mx-5 mt-2 mb-5 rounded-5" style={{ padding: "10px" }}>User Registration</h1>
      <form style={{ backgroundColor: "transparent" }} action="" className="w-50 mx-auto px-5 py-3 border rounded-2" onSubmit={handleSubmit(handleFormSubmit)} >
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input type="text" style={{ backgroundColor: "transparent", color: "aliceblue" }} className="form-control" id="username" {...register('username', { required: true })} />
          {
            (errors.username?.type === "required") && <p className="text-danger">Username is mandatory</p>
          }
        </div>
        <div className="mb-3">
          <label htmlFor="email">EmailID</label>
          <input type="email" style={{ backgroundColor: "transparent", color: "aliceblue" }} className="form-control" id="email" {...register('email', { required: true })} />
          {
            (errors.email?.type === "required") && <p className="text-danger">EMail is required</p>
          }
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input type="password" style={{ backgroundColor: "transparent", color: "aliceblue" }} className="form-control" id="password" {...register('password', { required: true, minLength: 8 })} />
          {
            (errors.password?.type === "required") && <p className="text-danger">Password is required</p>
          }
          {
            (errors.password?.type === "minLength") && <p className="text-danger">Password should consist of atleast 8 characters</p>
          }
        </div>
        <div className="mb-3">
          <label className="fw-bold" htmlFor="year">Select Branch</label>
          <select id="branch" style={{ backgroundColor: "transparent", color: "aliceblue" }} className="form-select" {...register('branch')}>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="fw-bold" htmlFor="year">Select Year</label>
          <select id="year" style={{ backgroundColor: "transparent", color: "aliceblue" }} className="form-select" {...register('year')}>
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
            <option value="Fourth">Fourth</option>
          </select>
        </div>
        <button className="btn btn-success d-block mx-auto" type="submit">Register</button>
      </form>
      <p className="text-center text-info mt-3">Already Registered? <Link to="/login" >Login</Link></p>
    </div>
  )
}

export default Register