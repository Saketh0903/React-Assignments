import React from 'react'

function SignUp() {
  return (
    <div>
      <h1 className="display-1 text-info text-center bg-info-subtle mx-5 mt-2 mb-5 rounded-5" style={{padding:"10px"}}>SignUp Form</h1>
      <form action="" className="w-50 mx-auto">
        <div className="mb-3">
        <input type="text" className="form-control" placeholder="UserName" />
        </div>
        <div className="mb-3">
        <input type="email" className="form-control" placeholder="EmailID"/>
        </div>
        <div className="mb-3">
        <input type="date" className="form-control" placeholder="DateOfBirth" />
        </div>
        <div className="mb-3">
        <input type="tel" className="form-control" placeholder="Mobile Number"/>
        </div>
        <button className="btn btn-success d-block mx-auto">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp