import React, {Component} from 'react';
import { Link } from "react-router-dom";


function Nav() {
  return(
      <nav className= "nav-wrapper grey darken-2">
          <div className="container">

          <ul className="right">
          <li><Link to="/" className="home">HOME</Link></li>
          <li><Link to="/about" >ABOUT</Link></li>
          <li><Link to="/events" className="/events">EVENTS</Link></li>
          <li><Link to="/cart" className="/cart">CART</Link></li>
          <li><Link to="/login" className="/login">LOG IN</Link></li>
          <li><Link to="/signup" className="/signup">SIGN UP</Link></li>   
          <li><Link to= "nav-link"className="btn btn-floating grey darken-3">ZB</Link></li>
         
          <Link></Link>
          </ul>
          </div>
      </nav>
      
      
    ) 
}
   
export default Nav;