import React,{useState} from 'react'


function APICallDemo2() {
    let [users,setUsers]=useState([])
    function getData(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>setUsers(users));
    }
  return (
    <div>
        <h2>List Of Users</h2>
        <button className="btn btn-primary" onClick={getData}>Get Data</button>
        {
            users.length===0?<p>No Users</p>:
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
        }
        
    </div>
  )
}

export default APICallDemo2