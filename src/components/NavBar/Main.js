import React from 'react'

function Main(props) {
  return (
    <div className="card">
      <img className="pic" src={props.avatar} alt="" /><hr />
      <h5><b>ID:</b> {props.id}</h5>
      <p><b>FirstName: </b>{props.first_name}</p>
      <p><b>LastName: </b>{props.last_name}</p>
      <p><b>Email ID: <br /></b>{props.email}</p>

    </div>
  )
}

export default Main