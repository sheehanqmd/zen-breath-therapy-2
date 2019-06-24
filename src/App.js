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

  //    <StripeProvider 
  //    apiKey="pk_test_fCsl61Lrhj9Avk7NxHRBmZe800wot3l4za">
  //    <div className="stripe">
  //      <h1>React Stripe Elements Example</h1>
  //      <Elements>
  //        <CheckoutForm />
  //      </Elements>
  //    </div>
  //  </StripeProvider>
   
  );

  }



export default App;
