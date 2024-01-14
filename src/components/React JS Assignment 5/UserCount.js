import React from 'react'

function UserCount(props) {
  return (
    <div>
        <h1 className="text-primary-emphasis display-5 mt-3 text-center">The usercount is: {props.counter}</h1>
    </div>
  )
}

export default UserCount