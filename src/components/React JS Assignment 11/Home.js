import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Home() {
  let navigate=useNavigate();
  function toSignUp(){
    navigate('/register')
  }
  return (
    <div className='Home p-5'>
      
        <h1 >Welcome to Your Learning Hub!</h1>
        <br /><br />
      <p>Explore a wide range of resources to enhance your knowledge in computer science, electronics, and information technology.</p>
      <br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <button className='btn' onClick={toSignUp} style={{backgroundColor:'transparent',border:"1px solid aliceblue",color:'aliceblue'}}>Get Started</button>
    </div>
  )
}

export default Home