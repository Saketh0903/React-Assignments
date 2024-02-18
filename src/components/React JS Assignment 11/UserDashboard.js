import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Card from './Card'
import "./Card.css"
import { useUserContext } from './UserContext';
function UserDashboard() {

  let Navigate=useNavigate()
  let [resources,setResources]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/resources")
    .then((response)=>response.json())
    .then((data)=>{
      setResources(data)
    })
  },[])

  let { state } = useLocation()
  const { setUserDataContext } = useUserContext();
  useEffect(() => {
    setUserDataContext(state);
  }, [state, setUserDataContext]);

  return (
    <div>
      <div className="p-1">
        <h1 className="text-end text-primary" >Welcome,<span className="fw-bolder" style={{ color: "rgb(255, 213, 0)" }}>{state.username}</span></h1>
        <p className="text-end fw-bolder">{state.email}</p>
        <nav>
          {/* Add more navigation links as needed */}
        </nav>
      </div>

      <h1>Your Content</h1>
      <div className="mycontainer">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-3">
          {
            resources.filter((element, index) => element.year === state.year && element.branch === state.branch).map((element, index) =>
            <Link to='/units' state={{url:element.url}} style={{textDecoration:"none"}}>
              <div className="col gx-3" key={index} >
                <Card {...element} />
              </div>
              </Link>
            )

          }
        </div>
      </div>
      <div >
      <Link style={{ textDecoration: "none", color: "white" }} to="/resources" className="Link"><button className="btn btn-success d-block mx-auto mb-1">Resources</button></Link>
      <Link style={{ textDecoration: "none", color: "white" }} to="/contribute" className="Link"><button className="btn btn-primary d-block mx-auto mb-1">Contribute</button></Link>

      </div>
    </div>
  )
}

export default UserDashboard
