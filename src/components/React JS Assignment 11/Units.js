import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Units.css"
function Units() {
    let location=useLocation()
    let {url}=location.state
    let units=[
        {unit:"Unit 1",bg:"#5E76EF",color:"#2E26EF"},
        {unit:"Unit 2",bg:"#B167EF",color:"#B126EF"},
        {unit:"Unit 3",bg:"#D79400",
        color:"#DA5B22"},
        {unit:"Unit 4",bg:"#A9EE1D",color:"#5FB16C"},
        {unit:"Unit 5",bg:"#E8BDD4",color:"#50BDD4"}
    ]

  return (
    <div className='mt-3'>
        {
            units.map((element)=>{
                return(

                <>
                
                <Link to={url} target='_blank' style={{textDecoration:"none"}}>
                <div className='unit' >
                <h3><Link style={{textDecoration:"none",color:element.color}} to={url} target='_blank'>{element.unit}</Link></h3>
                </div>
                </Link>
                </>
                )
            }
            )
        }
    </div>
  )
}

export default Units