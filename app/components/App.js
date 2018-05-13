import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import Routes from '../routes/routes';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { CustomAppBar } from './CustomAppBar';
import { palette } from '../theme/palette';

const basename = BASENAME || '/';

const theme = createMuiTheme(
  {
    palette
  }
);

export const App = ({history}) => (
  <MuiThemeProvider theme={theme}>
    <div className="main-container">
      <ConnectedRouter history={history} basename={basename}>
        <div>
          <CustomAppBar/>
          { Routes }
        </div>
      </ConnectedRouter>
    </div>
  </MuiThemeProvider>);
App.propTypes = {
  history: PropTypes.object.isRequired
};
