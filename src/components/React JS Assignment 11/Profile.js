import React from 'react'
import { useUserContext } from './UserContext'
function Profile() {
    const { userData } = useUserContext();
  return (
    <div>
        <div className='mt-3'>
            <img className='d-block mx-auto' style={{width:"200px"}} src="https://intigatetechnology.com/wp-content/uploads/2020/01/16112018_133736default.png" alt="" />
            <h3><span className="fw-bolder">Username:</span>{userData&&userData.username}</h3>
            <h5><span className="fw-bolder">Email:</span>{userData&&userData.email}</h5>
            <h6><span className="fw-bolder">Year:</span>{userData&&userData.year}</h6>
            <h6><span className="fw-bolder">Branch:</span>{userData&&userData.branch}</h6>
        </div>
    </div>
  )
}

export default Profile