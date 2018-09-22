import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/layout/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
