import React from 'react';
import { Link } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
import './nav.css'

function Navbar() {
    return (
    <nav >
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        
      </ul>
    </nav>
    
    );
}

export default Navbar;
