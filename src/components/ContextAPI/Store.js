import React,{useState} from 'react'
import { CounterContext } from './CounterContext'
function Store({children}) {
    let [counter,setCounter]=useState(100)
  return (
    <div>
        <CounterContext.Provider value={[counter,setCounter]}>
            {children}
        </CounterContext.Provider>
    </div>
  )
}

export default Store