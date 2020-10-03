import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Components/Login'
import RegistrationForm from './Components/RegistrationForm'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/RegistrationForm" exact component={RegistrationForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
