import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PhonesList from './container/PhonesList';
import Nav from './presentational/Nav';

const Routes = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={PhonesList} />
    </Switch>
  </Router>
);

export default Routes;
