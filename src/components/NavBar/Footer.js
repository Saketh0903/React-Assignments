import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <footer>
                <p style={{ textAlign: "center" }}>&copy;Copyright2023 reserved</p>
                <div className="links">
                    <div className="menu-bottom">
                        <h5>Navigate</h5>

                        <ul>
                            <div className="list-footer">
                                <li><a href=""><b>Home</b></a></li>
                                <li><a href=""><b>SignUp</b></a></li>
                                <li><a href=""><b>Login</b></a></li>
                            </div>
                        </ul>
                    </div>
                    <div className="menu-bottom">
                        <h5>Follow on</h5>
                        <ul>
                            <div className="list-footer">
                                <li><a href=""><b>Twitter</b></a></li>
                                <li><a href=""><b>FaceBook</b></a></li>
                                <li><a href=""><b>Instagram</b></a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer