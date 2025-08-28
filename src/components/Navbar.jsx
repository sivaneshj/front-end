import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../usecontext/DataContext'

function Navbar() {
  const {handlelogout} = useContext(DataContext);
  return (
    <>
        <nav>
            <h1>Zuppa</h1>
            <ul>
            <li><button><Link to="/login">Log In</Link></button></li>
            <li><button><Link to="/register">Register</Link></button></li>
            <li><button onClick={()=>handlelogout()}>Log Out</button></li>
            </ul>
      </nav>
    </>
  )
}

export default Navbar