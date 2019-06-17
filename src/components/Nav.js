import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Login from "./login/Login";

function Nav() {
  return(
      <nav className= "nav-wrapper grey darken-2">
          <div className="container">

          <ul className="right">
          <li><Link to="nav-links" className="HOME">HOME</Link></li>
          <li><Link to="nav-links" className="about">ABOUT</Link></li>
          <li><Link to="nav-links" className="events">EVENTS</Link></li>
          <li><Link to="nav-links" className="cart">CART</Link></li>
          <li><Link to="nav-links" className="login">LOG IN</Link></li>
          <li><Link to="nav-links" className="login">SIGN UP</Link></li>
          <li><Link to="nav-links" className="btn btn-floating grey darken-3">ZB</Link></li>
         
          <Link></Link>
          </ul>
          </div>
      </nav>
      
      
    ) 
}
   
export default Nav;