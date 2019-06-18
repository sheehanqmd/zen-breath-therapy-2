import React, {Component} from 'react';
import { HashRouter as Router, } from 'react-router-dom';
import routes from "./routes";

import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    // <Provider store = {store}>
    <Router>
    <div className="App">
      <Nav />
      
      {routes}
    </div>
    </Router>
    // </Provider>
  );
}

export default App;
