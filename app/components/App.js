import React from 'react';
import { Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Routes from '../routes/routes';
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
    <div className="main-container">
      <ConnectedRouter history={history}>
        <div>
          <CustomAppBar />
          { Routes }
        </div>
      </ConnectedRouter>
    </div>
  </MuiThemeProvider>);
App.propTypes = {
  history: PropTypes.object.isRequired
};
