import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav>
            <h1>Zuppa</h1>
            <ul>
            <li><button><Link to="/login">Log In</Link></button></li>
            <li><button><Link to="/register">Register</Link></button></li>
            <li><button><Link>Log Out</Link></button></li>
            </ul>
      </nav>
    </>
  )
}

export default Navbar