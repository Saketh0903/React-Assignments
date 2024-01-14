import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Technologies() {
  return (
    <div>
    <div className="bg-success-subtle">
      <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link class="nav-link active text-success" aria-current="page" to="reactjs">React JS</Link>
                </li>
                <li className="nav-item">
                    <Link class="nav-link active text-success" aria-current="page" to="angular">Angular</Link>
                </li>
                <li className="nav-item">
                    <Link class="nav-link active text-success" aria-current="page" to="vue">Vue</Link>
                </li>
            </ul>
            </div>
            <Outlet />
    </div>
  )
}

export default Technologies