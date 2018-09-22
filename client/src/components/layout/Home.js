import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
  ButtonToolbar,
  Jumbotron,
  Button
} from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Working Gear</h1>
          <p>
            Working Gear is a non-profit located in the downtown east side. We
            provide individuals with work appropriate clothing and PPE
            re-entering the workforce. We provide office attire for men and
            trade gear for men and women.
          </p>
          <Row className="show-grid">
            <Col md={12}>
              <ButtonToolbar>
                <Link to="/login">
                  <Button bsStyle="primary" bsSize="lg">
                    Login
                  </Button>
                </Link>
                <Link to="/sign-up">
                  <Button bsStyle="primary" bsSize="lg">
                    Sign up
                  </Button>
                </Link>
              </ButtonToolbar>
            </Col>
          </Row>
        </Jumbotron>
      </Grid>
    );
  }
}
