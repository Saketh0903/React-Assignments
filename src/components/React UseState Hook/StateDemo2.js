import React, { useState } from 'react'

function StateDemo2() {
    let users = [
        {
            id: 1,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            avatar: "https://reqres.in/img/faces/7-image.jpg",
        },
        {
            id: 2,
            email: "lindsay.ferguson@reqres.in",
            first_name: "Lindsay",
            last_name: "Ferguson",
            avatar: "https://reqres.in/img/faces/8-image.jpg",
        },
        {
            id: 3,
            email: "tobias.funke@reqres.in",
            first_name: "Tobias",
            last_name: "Funke",
            avatar: "https://reqres.in/img/faces/9-image.jpg",
        },
        {
            id: 4,
            email: "byron.fields@reqres.in",
            first_name: "Byron",
            last_name: "Fields",
            avatar: "https://reqres.in/img/faces/10-image.jpg",
        },
        {
            id: 5,
            email: "george.edwards@reqres.in",
            first_name: "George",
            last_name: "Edwards",
            avatar: "https://reqres.in/img/faces/11-image.jpg",
        },
        {
            id: 6,
            email: "rachel.howell@reqres.in",
            first_name: "Rachel",
            last_name: "Howell",
            avatar: "https://reqres.in/img/faces/12-image.jpg",
        },
    ]

    let [index,setIndex]=useState(0);

    function nextUser(){
        if(index<users.length-1)
            setIndex(index+1);
    }
    function previousUser(){
        if(index>0){
            setIndex(index-1)
        }
    }
    return (
        <div>
            <h1 className="text-primary display-3">User bio</h1>
            <div className="card border-1 border-black w-50 mx-auto">
                <img src={users[index].avatar} alt="" className="w-50 d-block mx-auto p-5"/>
                <h3>{users[index].first_name}</h3>
                <h5>{users[index].email}</h5>
            </div>
            <button className="btn btn-danger mt-5" onClick={previousUser}>Previous</button>
            <button className="btn btn-primary mt-5 " onClick={nextUser}>Next</button>
            
        </div>
    )
}

export default StateDemo2