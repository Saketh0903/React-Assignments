import React from 'react'

function UserList(props) {

  function deleteUser(index){
    let arr=[...props.users]
    arr.splice(index,1)
    props.setUsers(arr)
  }
  return (
    <div className="container shadow-lg mt-3 bg-light">
    <div className="mx-auto">
    <h5 className="text-primary-emphasis text-center">UserDetails</h5>
      <table className="table text-center">
        <thead>
          <tr>
            <th>Username</th>
            <th>EmailID</th>
            <th>Operations</th>
          </tr>
        </thead>
        {
            props.users.map((element,index)=>
            <tr key={index}>
              <td>{element.username}</td>
              <td>{element.email}</td>
              <td><button className="btn btn-danger" onClick={()=>deleteUser(index)}>Delete</button></td>
            </tr>
            )
        }
        </table>
    </div>
    </div>
  )
}

export default UserList