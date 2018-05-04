import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MortgageContainer from './containers/MortgageContainer';

export default (
  <Switch>
    <Route exact path="/" component={MortgageContainer} />
  </Switch>
);
