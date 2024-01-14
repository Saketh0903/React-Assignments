import React,{useContext} from 'react'
import C from './C'
import { CounterContext } from './CounterContext'

function B() {
  let [counter,setCounter]=useContext(CounterContext)
  return (
    <div className="bg-info p-1">
        <h1 className="text-center text-secondary">Component-B</h1>
        <p className="text-center">{counter}</p>
        <button className="btn btn-success mx-auto d-block" onClick={()=>setCounter(counter+1)}>Increment</button>

        <C />
    </div>
  )
}

export default B