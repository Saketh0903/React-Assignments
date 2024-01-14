import React from 'react'

function Child(props) {
    let b=1234;
  return (
    <div>
        <h1 className="bg-success text-light mt-5">Child</h1>
        <p className="text-secondary-emphasis">Data from parent is {props.data}</p>
        <button className="btn btn-primary" onClick={()=>props.func(b)}>Send Data To Parent</button>
    </div>
  )
}

export default Child