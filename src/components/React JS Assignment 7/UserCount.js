import React from 'react'

function UserCount(props) {
  return (
    <div className="container shadow-lg mt-3 bg-light">
      <h5 className="mt-3 text-primary-emphasis text-center">UserCount</h5>
      <h1 className="mt-3 text-success text-center">{props.users.length}</h1>
    </div>
  )
}

export default UserCount