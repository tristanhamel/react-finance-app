import React from 'react';
import { Router } from 'react-router-dom';
import Routes from '../routes';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { CustomAppBar } from './CustomAppBar';
import { palette } from '../theme/palette';

const theme = createMuiTheme(
  {
    palette
  }
);

export const App = ({history}) => (
  <MuiThemeProvider theme={theme}>
    <CustomAppBar />
    <div className="main-container">
      <Router history={history}>
        { Routes }
      </Router>
    </div>
  </MuiThemeProvider>);
App.propTypes = {
  history: PropTypes.object.isRequired
};
