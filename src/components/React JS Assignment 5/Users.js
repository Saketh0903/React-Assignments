import React, { useState, useEffect } from 'react'
import UserCount from './UserCount'

function Users() {
    let [users, setUsers] = useState([])
    let [counter, setCounter] = useState(0)
    let [added,setAdded] = useState([])
    function addCounter(id){
        setCounter(counter+1)
        let add=[...added]
        add.push(id)
        setAdded(add)
    }

    function removeCounter(id){
        setCounter(counter-1)
        let rem=[...added]
        rem.splice(rem.indexOf(id),1)
        setAdded(rem)
    }   

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])
    console.log(users)


    return (
        <div>
            <h1 className="text-primary text-center display-3">Users Data</h1>
            <UserCount counter={counter} />
            <div className="container text-center p-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-4">
                    {
                        users.map((element) =>
                            <div className="col">
                                <div className="card mx-auto border border-1 border-black p-1 shadow" style={{ height: "300px",width:"250px"}}>
                                    <h5 className="mt-1"><b>ID: </b>{element.id}</h5>
                                    <h6 className><b>UserName: <br /></b>{element.username}</h6>
                                    <h5><b>Name: </b><br />{element.name}</h5>
                                    <p><b>Email: <br /></b>{element.email}</p>
                                    {
                                        (added.indexOf(element.id)!=-1)?<button className="btn btn-danger mx-auto mt-1" onClick={()=>removeCounter(element.id)}>Remove</button>:
                                        <button className="btn btn-success mx-auto mt-1" onClick={()=>addCounter(element.id)}>Add</button>
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Users