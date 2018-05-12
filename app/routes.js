import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MortgageContainer from './containers/MortgageContainer';
import CompoundContainer from './containers/CompoundContainer';

export default (
  <Switch>
    <Route exact path="/" component={MortgageContainer} />
    <Route exact path="/compound_calculator" component={CompoundContainer} />
  </Switch>
);
