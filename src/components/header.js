import React from 'react'
import { Link } from 'gatsby'
import './Header.css'
const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={require('../images/udub-logo.svg')} width="60" />
      </Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/web">Web Design</Link>
      <Link to="/contact">
        <button>Contact Us</button>
      </Link>
    </div>
  </div>
)

export default Header
