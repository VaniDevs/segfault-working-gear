import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/auth/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <Login />
      </div>
    );
  }
}

export default App;
