import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/common/PrivateRoute';
import Home from './components/layout/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Panel from './components/dashboard/Panel';

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
          <Switch>
            <Route path="/dashboard" component={Panel} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
