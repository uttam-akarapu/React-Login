import React from 'react';
import logo from './logo.svg';
import './App.css';

import CreateAccount from "./components/CreateAccount/CreateAccount";
import Login from "./components/Login/Login";

import {BrowserRouter as Router ,Switch ,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <Router>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/CreateAccount" component={CreateAccount}/>
            </Switch>
          </Router>       
      
    </div>
  );
}

export default App;
