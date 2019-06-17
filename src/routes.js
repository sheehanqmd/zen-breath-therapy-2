import React from "react";
import {Switch, Route} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Events from './components/events/Events';
import Cart from './components/cart/Cart';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';


export default (
    
      
     <Switch>
      <Route component={ Nav } />
      <Route path="/" exact component={ Home }  />
      <Route path="/about" component={ About }  />
      <Route path="/events" component={ Events }  />
      <Route path="/cart" component={ Cart }  />
      <Route path="/login" component={ Login }  />
      <Route path="/signup" component={ Signup }  />
    </Switch>
  );