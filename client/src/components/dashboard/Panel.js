import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';
import MakeAppointments from './MakeAppointments';
import ShowAppointments from './ShowAppointments';
import Dashboard from './Dashboard';

export default class Panel extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <DashboardNavbar />
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/make-appointments" component={MakeAppointments} />
            <Route path="/show-appointments" component={ShowAppointments} />
          </div>
        </Router>
      </div>
    );
  }
}
