import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom'

function Contribute() {
    let { register, handleSubmit, formState: { errors } } = useForm()
  let navigate = useNavigate()

  function handleFormSubmit(newResource) {
    fetch('http://localhost:4000/resources', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newResource)
    })
      .then(response => {
        if (response.status === 201) {
          navigate('/resources')
        }
      })
      .catch(err => console.log("err in posting", err))
  }
  return (
    <div>
        <h1 className="text-info text-center bg-info-subtle mx-5 mt-2 mb-5 rounded-5" style={{ padding: "10px" }}>Contribute A Resource</h1>
      <form style={{ backgroundColor: "transparent" }} action="" className="w-50 mx-auto mb-3 px-5 py-3 border rounded-2" onSubmit={handleSubmit(handleFormSubmit)} >
        <div className="mb-3">
          <label className="fw-bold" htmlFor="url">Resource Link</label>
          <input type="text" style={{ backgroundColor: "transparent", color: "aliceblue" }} className="form-control" id="url" {...register('url', { required: true })} />
        </div>
        <div className="mb-3">
          <label className="fw-bold" htmlFor="title">Title</label>
          <input type="text" style={{ backgroundColor: "transparent", color: "aliceblue" }} className="form-control" id="title" {...register('title', { required: true })} />
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
        <div className="mb-3">
          <label className="fw-bold" htmlFor="year">Select Branch</label>
          <select id="branch" style={{ backgroundColor: "transparent", color: "aliceblue" }} className="form-select" {...register('branch')}>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
          </select>
        </div>
        <button className="btn btn-success d-block mx-auto" type="submit">Post</button>
        
      </form>
    </div>
  )
}

export default Contribute