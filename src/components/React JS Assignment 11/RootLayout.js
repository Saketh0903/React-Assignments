import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import NavBar1 from './NavBar1'

function RootLayout() {
  let location=useLocation()
  function navBar(){
    if(location.pathname==='/'||location.pathname==='/login'||location.pathname==='/register')
    return <NavBar/>
    else{
      return <NavBar1/>
    }
  }
  return (
    <div>
      {
        navBar()
      }
        
        <div style={{minHeight:"60vh"}}>
        <Outlet />
        </div>
        <Footer />
        
    </div>
  )
}

export default RootLayout