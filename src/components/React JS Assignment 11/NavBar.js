import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
function NavBar() {
    return (
        <div className="bg bg-dark px-3" >
            <ul className="navtop">
                <div className="links">
                <li className="nav-item ps-5">
                    <NavLink style={{textDecoration:"none"}} class="nav-link" aria-current="page" to="">Home</NavLink>
                </li>
                <li className="nav-item ps-5">
                    <NavLink style={{textDecoration:"none"}} class="nav-link" aria-current="page" to="register">Register</NavLink>
                </li>
                <li className="nav-item ps-5">
                    <NavLink style={{textDecoration:"none"}} class="nav-link" aria-current="page" to="login">Login</NavLink>
                </li>
                </div>
            </ul>
        </div>
    )
}

export default NavBar