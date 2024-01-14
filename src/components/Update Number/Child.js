import React from 'react'
import { useState } from 'react';
import './Child.css'
function Child(props) {
  return (
    <div className="button">
        <button onClick={props.Increment} className="bg-success text-light rounded-2 p-1 border-0 m-1">Increment</button>
        <button onClick={props.Decrement} className="bg-danger text-light rounded-2 p-1 border-0 m-1">Decrement</button>
    </div>
  )
}

export default Child