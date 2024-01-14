import React from 'react'

function SignIn() {
  return (
    <div>
      <h1 className="display-1 text-primary text-center bg-primary-subtle mx-5 mt-2 rounded-5 mb-5" style={{padding:"10px"}}>User Login</h1>
      <form action="" className="w-50 mx-auto">
        <div className="mb-3">
        <input type="text" className="form-control" placeholder="UserName" />
        </div>
        <div className="mb-3">
        <input type="email" className="form-control" placeholder="EmailID"/>
        </div>
        <button className="btn btn-success d-block mx-auto">Sign In</button> 
      </form>
    </div>
  )
}

export default SignIn