import { useState } from 'react'
import AddUser1 from "./AddUser1"
import UserList from './UserList'
import UserCount from './UserCount'
function RootComponent() {
    let [users,setUsers]=useState([])

  return (
    
    <div className="container">
        <h1 className="display-1 text-center" style={{color: "white"}} >User Management</h1>
        <div className="row">
            <div className="col-4">
                <AddUser1 setUsers={setUsers} users={users} />
            </div>
            <div className="col-4">
                <UserList setUsers={setUsers} users={users}  />
            </div>
            <div className="col-4">
                <UserCount setUsers={setUsers} users={users} />
            </div>
        </div>
    </div>
  )
}

export default RootComponent