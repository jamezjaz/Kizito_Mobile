import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PhonesList from './container/PhonesList';
import Nav from './presentational/Nav';
import PhoneDetails from './presentational/PhoneDetails';

const Routes = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={PhonesList} />
      <Route path="/phoneDetails/:id" component={PhoneDetails} />
    </Switch>
  </Router>
);

export default Routes;
