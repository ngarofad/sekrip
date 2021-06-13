import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Login, DashboardISP, DashboardAdminQoS, DashboardAdminQoE } from '../../pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboardISP">
          <DashboardISP />
        </Route>
        <Route path="/dashboardAdminQoS">
          <DashboardAdminQoS />
        </Route>
        <Route path="/dashboardAdminQoE">
          <DashboardAdminQoE />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
