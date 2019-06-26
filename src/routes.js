import React from "react";
import {Switch, Route,} from "react-router-dom";

import Home from './components/home/Home';
import About from './components/about/About';
import Events from './components/events/Events';
import Cart from './components/cart/Cart';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Logout from './components/Logout';
import EditUsername from "./components/EditUsername";
import CheckoutForm from "./components/CheckoutForm";


export default (
    
      
    <Switch>
      
      <Route path="/" exact component={ Home }  />
      <Route path="/about" component={ About }  />
      <Route path="/events" component={ Events }  />
      <Route path="/cart" component={ Cart }  />
      <Route path="/login" component={ Login }  />
      <Route path="/signup" component={ Signup }  />
      <Route path="/logout" component={ Logout } />
      <Route path="/editUsername" component={ EditUsername} />
      <Route path="/checkoutForm" component={ CheckoutForm }/>
    </Switch>
  );