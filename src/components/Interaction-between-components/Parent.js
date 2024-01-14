import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    let a=10
    let [childData,setChildData]=useState('')
    
    function getDataFromChild(x){
        setChildData(x)
    }
    return (
        <div className="bg-primary p-1">
            <h1 className="text-light">Parent</h1>
            <h2>Data from child: {childData}</h2>
            <Child data={a} func={getDataFromChild}/>
        </div>
    )
}

export default Parent