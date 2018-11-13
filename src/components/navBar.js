import React from 'react'
import { Link } from 'gatsby'
import './navbar.css'

const NavBar = () => (
  <div>
      <nav className= "navbar">
      <div className= "container">
        <div className= "brand">
          <img src="https://hfweb-assets.s3.amazonaws.com/v2/images/Help-desk-customer-support.svg" width="180"/>
        </div>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus/">Product</Link></li>
          <li><Link to="/cases/case2">Solutions</Link></li>
          <li><Link to="/Integerations/">Integerations</Link></li>
          <li>Resources</li>
          <li>Book a demo</li>
        </ul>
          </div>
      </nav>
  </div>

)

export default NavBar
