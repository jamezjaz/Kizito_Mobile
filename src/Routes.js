import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PhonesList from './container/PhonesList';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={PhonesList} />
    </Switch>
  </Router>
);

export default Routes;
