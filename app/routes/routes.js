import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes} from './routes.config';

export default (
  <Switch>
    {routes.map((route, i) => (
      <Route
        key={i}
        exact
        path={route.path}
        titleLocalizationLabel={route.titleLocalizationLabel}
        component={route.component}/>
    ))}
    <Route path="/" render={() => <Redirect to="/mortgage_calculator" />}/>
  </Switch>
);
