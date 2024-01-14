import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
function StateDemo() {
    let [counter,setCounter]=useState(1)
    let [emp,setEmp]=useState({eid:101,name:"Raj"})
    function increment(){
        setCounter(counter+1)
    }
    function changeEmpData(){
      setEmp({...emp,name:"Ram"})
    }
  return (
    <div>
        <h2 className="display-2">State Demo</h2>
        <h1>{emp.eid}</h1>
        <h1 className="display-4">{emp.name}</h1>
        <button onClick={changeEmpData} className="bg-success">Change Emp Data</button>

    </div>
  )
}

export default StateDemo