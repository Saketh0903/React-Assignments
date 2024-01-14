import React from 'react'
import './Parent.css'
function Child(props) {
  return (
    <div className="product">
        <img src={props.img} alt=""height={200} /><hr />
        <h5>Product Name: <b>{props.name}</b></h5>
        <p className="lead">Brand: <b>{props.brand}</b></p>
        <p>Price: <b>{props.price}</b></p>
    </div>
  )
}

export default Child