import { UsersContext } from "./UsersContext";
import { useState,useEffect } from "react";

function UsersStore({children}){

    let [users,setUsers]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=>setUsers(data))
    })
    
    return(
        <UsersContext.Provider value={[users,setUsers]}>
            {children}
        </UsersContext.Provider>
    )
}


export default UsersStore