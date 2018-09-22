import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './Login.css';

export default class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <Link to="/dashboard">
            <Button block bsSize="large" type="submit">
              Login
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}
