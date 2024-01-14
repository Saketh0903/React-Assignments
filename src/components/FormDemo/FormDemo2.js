import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
function FormDemo2() {

    let { register, handleSubmit, formState: { errors } } = useForm()
    let [users, setUsers] = useState([])
    function handleFormSubmit(userObj) {

        setUsers([...users, userObj])
    }
    function deleteUser(index){

        let arr=[...users];
        console.log(index)
        arr.splice(index,1)
        setUsers(arr)
    }

    console.log(errors)
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1 className="display-2 text-center text-primary-emphasis">Form</h1>
                    <form action="" className="w-100 mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
                        <div className="mb-3" >
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" className="form-control" {...register('username', { required: true, minLength: 4 })} />
                        </div>
                        {
                            (errors.username?.type === 'required') && <p className="text-danger">UserName is required</p>
                        }
                        {
                            (errors.username?.type === 'minLength' && <p className="text-danger">Min length is 4</p>)
                        }
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-control" {...register('email', { required: true })} />
                        </div>
                        {
                            (errors.email?.type === 'required') && <p className="text-danger">Email is required</p>
                        }


                        <div className="mb-3">
                            <label htmlFor="state">State</label>
                            <select id="state" {...register('state', { required: true })} className="form-select" defaultValue="">
                                <option value="" selected disabled>Select State</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                            </select>
                        </div>
                        {
                            (errors.state?.type === "required") && <p className="text-danger">State must be selected</p>
                        }
                        <div className="mb-3">
                            <label htmlFor="">Choose Gender</label>
                            <div className="form-check">
                                <input type="radio" id="m" className="form-check-input" {...register('gender')} value="male" />
                                <label htmlFor="m" className="form-check-label">Male</label>
                            </div>
                            <div className="form-check">
                                <input type="radio" id="f" className="form-check-input" {...register('gender')} value="female" />
                                <label htmlFor="f" className="form-check-label">Female</label>
                            </div>
                        </div>
                        <button className="btn btn-success mx-auto">Login</button>
                    </form>
                </div>
                <div className="col-8">
                    <h1 className="text-success-emphasis display-3 text-center">Table of users</h1>
                    {
                        (users.length === 0) ? <h5 className="text-center">No users</h5> :
                            <table className="table table-bordered table-striped table-hover table-responsive">
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>State</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((element, index) =>
                                            <tr key={index}>
                                                <td>{element.username}</td>
                                                <td>{element.email}</td>
                                                <td>{element.state}</td>
                                                <td>{element.gender}</td>
                                                <td><button className="btn btn-danger" onClick={()=>{deleteUser(index)}}>delete</button></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                    }
                </div>
            </div>
        </div>
    )
}

export default FormDemo2