import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import UserTable from './UserTable'
function AddUser() {
    let { register, handleSubmit, formState: { errors } } = useForm()
    let [users, setUsers] = useState([])
    function handleFormSubmit(userObj) {
        setUsers([...users, userObj])
    }

    return (
        <div style={{ paddingBottom: "50px" }}>

            <h1 className="text-center">User Form Submission and details</h1>
            <form action="" onSubmit={handleSubmit(handleFormSubmit)} className="w-50 mb-3 mx-auto shadow-lg"  >
                <h5 className="mb-3 text-primary">User Registration</h5>
                <div className="mb-3">
                    <label htmlFor="username">UserName</label>
                    <input type="text" className="form-control" id="username" {...register('username', { required: true, minLength: 4, maxLength: 8 })} />
                    {
                        (errors.username?.type === "required") && <p className="text-danger">Username is mandatory</p>
                    }
                    {
                        (errors.username?.type === "minLength") && <p className="text-danger">Min length should be 4</p>
                    }
                    {
                        (errors.username?.type === "maxLength") && <p className="text-danger">Max length should be 8</p>
                    }
                </div>

                <div className="mb-3">
                    <label htmlFor="dateofbirth">Date Of Birth</label>
                    <input type="date" className="form-control" id="dateofbirth" {...register('dateofbirth', { required: true })} />
                    {
                        (errors.dateofbirth?.type === "required") && <p className="text-danger">Date Of Birth is required</p>
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="city">Select City</label>
                    <select id="city" className="form-select" {...register('city', { required: true })} defaultValue="">
                        <option value="" disabled>Select a city</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Banglore">Banglore</option>
                        <option value="Delhi">Delhi</option>
                    </select>
                    {(errors.city?.type === "required") && <p className="text-danger">City is required</p>}
                </div>
                <button type="submit" className="btn btn-success d-block mx-auto">Submit</button>
            </form>
            <div className="mb-3 w-75 mx-auto">
                <UserTable user={users} />
            </div>
        </div>
    )
}

export default AddUser