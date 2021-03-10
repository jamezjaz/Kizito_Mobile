import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PhonesList from './container/PhonesList';
import About from './presentational/About';
import Error from './presentational/Error';
import Footer from './presentational/Footer';
import Nav from './presentational/Nav';
import PhoneDetails from './presentational/PhoneDetails';

const Routes = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={PhonesList} />
      <Route path="/phoneDetails/:id" component={PhoneDetails} />
      <Route path="/about" component={About} />
      <Route component={Error} />
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
