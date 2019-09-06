import React, {Component} from 'react';
import { HashRouter as Router, } from 'react-router-dom';
import routes from "./routes";
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
