import React from 'react'
import { useState } from 'react'
import Child from './Child';
function Parent() {
    let [counter,setCounter]= useState(0);
    function increment(){
        setCounter(counter+1);
    }
    function decrement(){
        setCounter(counter-1);
    }
  return (
    <>
    <h1 className="text-primary-emphasis display-5">Number Increment and Decrement</h1>
    <div className="number">
        <h1 className="text-success-emphasis">Number: {counter}</h1>
    </div>
    <Child number={counter} Increment={increment} Decrement={decrement}/>
    </>
  )
}

export default Parent