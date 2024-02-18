import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
function Card(props) {
    function getUrl(branch){
        switch(branch){
            case "CSE": return "https://www.cassioli.com/wp-content/uploads/2020/07/software-3-1500x1125.jpg"
            case "ECE": return "https://th.bing.com/th/id/OIP.aM-uPtUP_z2z1xAAPsxjHwHaE8?rs=1&pid=ImgDetMain"
            case "IT": return "https://www.techquintal.com/wp-content/uploads/2021/05/Information-Technology.jpg"
        }
    }
    return (
        <div id='card' className="card border rounded-2 mx-auto">

            <img src={getUrl(props.branch)} alt="" className="d-block mx-auto my-3 mx-2" />
            <hr />
            <p>{props.title}</p>
            <div className='tags'>
            <p style={{backgroundColor:"rgba(0,255,150,0.8)",color:"darkgreen",padding:"3px"}}><b>Year:{props.year}</b></p>
            <p style={{backgroundColor:"rgba(255,0,150,0.8)",color:"darkred",padding:"3px"}}><b>Branch:{props.branch}</b></p>
            </div>
            
            <button className='btn btn-info d-block mx-auto details' ><Link style={{textDecoration:"none"}} to='/units' state={{url:props.url}}>click here</Link></button>
            
        </div>
      )
}

export default Card