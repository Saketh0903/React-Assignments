import React from 'react'

function Footer() {
  return (
    <div className="bg-dark text-light p-5">
      <div className="row">
        <div className="col-6">
      <h1>Tech Blog</h1>
      <p>&copy; CopyRights Reserved</p>
      </div>
      <div className="col-6 justify-content-end">
        <h5>Follow us on</h5>
        <ul style={{listStyleType:"none",padding:"0px"}}>
        <li>FaceBook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer