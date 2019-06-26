import React, {Component} from 'react';
import { HashRouter as Router, } from 'react-router-dom';
import routes from "./routes";
// import {Elements, StripeProvider} from 'react-stripe-elements';
// import CheckoutForm from './CheckoutForm';



import Nav from "./components/Nav";
import './App.css';

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
