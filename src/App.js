import React, {Component} from 'react';
import { HashRouter as Router, } from 'react-router-dom';
import routes from "./routes";
// import './App.css';
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import {Elements, StripeProvider} from 'react-stripe-elements';
// import CheckoutForm from './CheckoutForm';

import Nav from "./components/Nav";


function App() {
  return (
    
    <Router>
    <div className="App">

      <Nav />

      {routes}
    </div>
    </Router>


   
  );

  }



export default App;
