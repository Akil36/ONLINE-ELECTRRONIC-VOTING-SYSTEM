import React from 'react'
import { Link } from 'react-router-dom'
import './Ex.css'
function Ex() {
  return (
    <div>
      <nav className='nav'>
        <div className='nav-items'>
          <Link to='/about'><b>About Us</b></Link>
          <Link to='/contact'><b>Contact</b></Link>
          {/* <Link to='/update'>Update</Link>
          <Link to='/delete'>Delete</Link>
          <Link to='/select'>Select</Link> */}
        </div>
      </nav>
    </div>
  )
}

export default Ex