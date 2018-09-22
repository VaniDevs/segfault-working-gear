import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class DashboardNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Working Gear</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem
              eventKey={1}
              componentClass={Link}
              href="/dashboard"
              to="/dashboard"
            >
              Dashboard
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href="/make-appointments"
              to="/make-appointments"
            >
              Make Appointments
            </NavItem>
            <NavItem
              eventKey={3}
              componentClass={Link}
              href="/show-appointments"
              to="/show-appointments"
            >
              Show Appointments
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
