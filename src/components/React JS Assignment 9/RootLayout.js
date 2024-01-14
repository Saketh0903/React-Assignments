import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
        <NavBar />

        <div style={{minHeight:"90vh"}}>
        <Outlet />
        </div>
        <Footer />
        
    </div>
  )
}

export default RootLayout