import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Working Gear</h1>
        <p>
          Working Gear is a non-profit located in the downtown east side. We
          provide individuals with work appropriate clothing and PPE re-entering
          the workforce. We provide office attire for men and trade gear for men
          and women.
        </p>
        <Link to="/login">
          <Button bsStyle="primary">Login</Button>
        </Link>
      </Jumbotron>
    );
  }
}
