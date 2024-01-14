import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'



function AddUser1(props) {

  let { register, handleSubmit, formState: { errors }, getValues, control, setError, clearErrors } = useForm()
  let arr = props.users.map((element) => element.username)
  function handleFormSubmit(userObj) {
    let isDuplicate = props.users.some((user) => user.name === userObj.name)
      props.setUsers([...props.users, userObj])
    
  }
  return (
    <div className="container shadow-lg mt-3 bg-light" style={{paddingBottom:"30px"}}>
      <h5 className="mt-3 text-primary-emphasis text-center">UserForm</h5>
      <form className="mx-auto mt-3" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" className="form-control"  {...register('username', { required: true })} />
          {
            (errors.username?.type === "required") && <p className="text-danger">UserName is mandatory</p>
          }
        </div>
        <div className="mb-3">
          <label htmlFor="email">EMail</label>
          <input type="email" id="email" className="form-control" {...register('email', { required: true })} />
          {
            (errors.email?.type === "required") && <p className="text-danger">EMail is required</p>
          }
        </div>

        <button type="submit" className="btn btn-primary d-block mx-auto">Add</button>
      </form>
    </div>
  )
}

export default AddUser1