import React from 'react'
import { useForm } from 'react-hook-form'
import './UserForm.css'
function UserForm() {

    let { register, handleSubmit, formState: { errors } } = useForm()

    function handleFormSubmit(userObj) {
        console.log(userObj)
    }

    console.log(errors)
    return (
        <div>
            <form autoComplete="off" action="" onSubmit={handleSubmit(handleFormSubmit)} className="w-50 mx-auto shadow-lg">
                <div className="form">
                    <h5 className="text-primary-emphasis">Registration Form</h5>
                    <div className="row">
                        <div className="mb-3 col">
                            <label className="fw-bold" htmlFor="firstName">First Name</label>
                            <input style={{minWidth:200}} type="text" className="form-control" {...register('firstname', { required: true, minLength: 4, maxLength: 6 })} />
                            {(errors.firstname?.type === "required") && <p className="text-danger mt-1">First Name is mandatory</p>}
                            {(errors.firstname?.type === "minLength") && <p className="text-danger mt-1">The minimum length is 4</p>}
                            {(errors.firstname?.type === "maxLength") && <p className="text-danger mt-1">The maximum length is 6</p>}
                        </div>
                        <div className="mb-3 col">
                            <label style={{minWidth:200}} className="fw-bold" htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" {...register('lastname', { required: true, minLength: 4, maxLength: 6 })} />
                            {(errors.lastname?.type === "required") && <p className="text-danger mt-1">Last Name is mandatory</p>}
                            {(errors.lastname?.type === "minLength") && <p className="text-danger mt-1">The minimum length is 4</p>}
                            {(errors.lastname?.type === "maxLength") && <p className="text-danger mt-1">The maximum length is 6</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col">
                            <label className="fw-bold" htmlFor="DateofBirth">Date of Birth</label>
                            <input type="date" className="form-control" {...register('DateOfBirth', { required: true })} />
                            {(errors.DateOfBirth?.type === "required") && <p className="text-danger">Date Of Birth is mandatory</p>}
                        </div>
                        <div className="mb-3 col">
                            <label className="fw-bold" htmlFor="gender">Gender</label><br />
                            <input type="radio" id="gender" className="form-check-input" {...register('gender', { required: true })} />
                            <label htmlFor="gender" className="form-check-label" >Female</label>
                            <input type="radio" className="form-check-input" id="female" {...register('gender', { required: true })} />
                            <label htmlFor="gender" className="form-check-label" >Male</label>
                            {(errors.gender?.type === "required") && <p className="text-danger">Select a gender</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col">
                            <label className="fw-bold" htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-control" {...register('email', { required: true })} />
                            {(errors.email?.type === "required") && <p className="text-danger">Email is mandatory</p>}
                        </div>
                        <div className="mb-3 col">
                            <label className="fw-bold" htmlFor="phoneNumber">Phone Number</label>
                            <input type="tel" id="phoneNumber" className="form-control" {...register('phonenumber', { required: true, pattern: /^[0-9]{10}$/ })} />
                            {(errors.phonenumber?.type === "required") && <p className="text-danger">Phone Number is required</p>}
                            {(errors.phonenumber?.type === "pattern") && <p className="text-danger">It should contain exactly 10 digits</p>}
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="fw-bold" htmlFor="subject">Select Subject</label>
                    <select id="subject" className="form-select" {...register('subject')}>
                        <option value="DBMS">DBMS</option>
                        <option value="OOPS">OOPS</option>
                        <option value="DLD">DLD</option>
                        <option value="MFCS">MFCS</option>
                        <option value="SIQT">SIQT</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-success d-block mx-auto">Submit</button>
            </form>
        </div>
    )
}

export default UserForm