import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div className="bg-primary-subtle">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link class="nav-link active" aria-current="page" to="">Home</Link>
                </li>
                <li className="nav-item">
                    <Link class="nav-link active" aria-current="page" to="register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link class="nav-link active" aria-current="page" to="login">Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar