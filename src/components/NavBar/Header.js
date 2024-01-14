import React from 'react'
import './Header.css'
function Header() {
    return (
        <div>
            <header>
                <div className="header">
                    <h1 className="logo text-primary-emphasis">Logo</h1>
                    <nav>
                        <div className="logo"></div>
                        <div className="menu container">
                            <ul>

                                <div className="list">
                                    <li><a href="">Home</a></li>
                                    <li><a href="">SignUp</a></li>
                                    <li><a href="">Login</a></li>

                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header