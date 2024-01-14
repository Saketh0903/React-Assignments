import React, { useState } from 'react'

function FormDemo() {

    let [username,setUserName]=useState('')
    function handleUsername(event){
        setUserName(event.target.value)
    }
    let [email,setEmail]=useState('')
    function handleEmail(event){
        setEmail(event.target.value)
    }
    function handleSubmit(event){
        console.log(username)
        console.log(email)
        event.preventDefault();
    }
  return (
    <div>
        <h1 className="text-success-emphasis text-center">FormDemo</h1>
        <form className="w-50 mx-auto mt-5" action="" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="UserName">UserName</label>
                <input type="text" name="username" className="form-control" id="UserName" onChange={handleUsername}/>
            </div>
            <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="form-control" id="email" onChange={handleEmail}/>
            </div>
            <div>
                <button type="submit" className="btn btn-success">Submit</button>
            </div>

        </form>
    </div>
  )
}

export default FormDemo