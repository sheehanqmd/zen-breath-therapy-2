import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Logout from "./Logout";
import Events from './events/Events';
import Home from './home/Home';
import Cart from './cart/Cart';


function Nav() {
  return(
    <div>
      <div class="navbar-fixed">
      <nav className= "nav-wrapper blue-grey darken-2">


          <div className="container">

          
          <a href="#"><Link to="/" className="brand-logo left">BREATH THERAPY</Link></a>

          {/* <a href="#" class="sidenav-trigger" data-target="mobile-links">
            <i class="material-icons">menu</i>
          </a> */}

          <ul className="hide-on-med-and-down right">
          <li><Link to="/about" >ABOUT</Link></li>
          <li><Link to="/events" className="/events">EVENTS</Link></li>
          <li><Link to="/cart" className="/cart">CART</Link></li>
          <li><Link to="/login" className="/login">LOG IN</Link></li>
          <li><Link to="/signup" className="/signup">SIGN UP</Link></li> 
          <li><Link to="/" className="/"><Logout/></Link></li>  
    
         
          
          </ul>
          </div>
      </nav>
      </div>

      {/* <ul class="sidenav" id="mobile-links ">
         <li><Link to="/about" >ABOUT</Link></li>
          <li><Link to="/events" className="/events">EVENTS</Link></li>
          <li><Link to="/cart" className="/cart">CART</Link></li>
      </ul>
 <script>
 const mobile-links = document.querySelectorAll(".sidenav");
 M.Sidenav.init(mobile-links,{});
</script>  */}

      </div>
      
    ) 
}


   
export default Nav;