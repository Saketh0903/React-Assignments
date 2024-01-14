import React from "react";
import {Link} from 'react-router-dom'

function NavigationBar() {
  return (
    <ul className="nav justify-content-end">
      {/* link to Home  */}
      <li className="nav-item">
        <Link className="nav-link" to=" ">
          Home
        </Link>
      </li>
       {/* link to Register  */}
       <li className="nav-item">
        <Link className="nav-link" to="register">
          Register
        </Link>
      </li>
       {/* link to Login  */}
       <li className="nav-item">
        <Link className="nav-link" to="login">
          Login
        </Link>
      </li>
       {/* link to Tech  */}
       <li className="nav-item">
        <Link className="nav-link" to="technologies">
          Technologies
        </Link>
      </li>

    </ul>
  );
}

export default NavigationBar;