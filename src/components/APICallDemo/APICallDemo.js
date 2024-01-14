import React,{useEffect, useState} from 'react'

function APICallDemo() {
    let [users,setUsers]=useState([])
    useEffect(
        ()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(usersList=>setUsers(usersList))
        },[]
    )
  return (
    <div> 
        <h2>List Of Users</h2>
        <div className="container">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default APICallDemo