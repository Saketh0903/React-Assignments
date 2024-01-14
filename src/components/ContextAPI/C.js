import React,{useContext} from 'react'
import { CounterContext } from './CounterContext'

function C() {
  let [counter,setCounter]=useContext(CounterContext)
  return (
    <div className="bg-light p-1">
        <h1 className="text-center text-secondery">Component-C</h1>
        <p className="text-center">{counter}</p>
        <button className="btn btn-success mx-auto d-block" onClick={()=>setCounter(counter+1)}>Increment</button>

    </div>
  )
}

export default C