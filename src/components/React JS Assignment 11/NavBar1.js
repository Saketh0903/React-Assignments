import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
function NavBar1() {
    return (
        <div className="bg bg-dark px-3" >
            <ul className="navtop">
                <div className="links">
                <li className="nav-item ps-5">
                    <NavLink style={{textDecoration:"none"}} class="nav-link" aria-current="page" to="">Home</NavLink>
                </li>
                <li className="nav-item ps-5">
                    <NavLink style={{textDecoration:"none"}} class="nav-link" aria-current="page" to="/profile">Profile</NavLink>
                </li>
                <li className="nav-item ps-5">
                    <NavLink style={{textDecoration:"none"}} class="nav-link" aria-current="page" to="login">Logout</NavLink>
                </li>
                </div>
            </ul>
        </div>
    )
}

export default NavBar1