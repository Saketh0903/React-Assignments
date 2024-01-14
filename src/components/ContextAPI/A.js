import React,{useContext} from 'react'
import B from './B'
import { CounterContext } from './CounterContext'
import { UsersContext } from '../ContextAPI 2/UsersContext'


function A() {

  let [counter,setCounter]=useContext(CounterContext)
  let [users,setUsers]=useContext(UsersContext)
  return (
    <div className="bg-secondary p-1">
        <h1 className="text-primary text-center">Component-A</h1>
        <p className="text-center">{counter}</p>
        <button className="btn btn-success mx-auto d-block" onClick={()=>setCounter(counter+1)}>Increment</button>
        <p className="text-center">{users.length}</p>
        <B />
    </div>
  )
}

export default A