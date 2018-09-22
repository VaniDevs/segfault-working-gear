import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
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
            <NavDropdown eventKey={2} title="Manage Appointments">
              <MenuItem
                eventKey={2.1}
                componentClass={Link}
                href="/make-appointments"
                to="/make-appointments"
              >
                Make an appointment
              </MenuItem>
              <MenuItem
                eventKey={2.2}
                componentClass={Link}
                href="/show-appointments"
                to="/show-appointments"
              >
                Show appointments
              </MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
