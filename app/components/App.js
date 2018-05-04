import React from 'react';
import { AppBar, Toolbar, IconButton, Typography} from 'material-ui';
import MenuIcon from '@material-ui/icons/Menu';
import { Router } from 'react-router-dom';
import Routes from '../routes';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        light: '#52c7b8',
        main: '#009688',
        dark: '#00675b',
        contrastText: '#fff',
      },
      secondary: {
        light: '#8d6e63',
        main: '#be9c91',
        dark: '#5f4339',
        contrastText: '#fff',
      }
    }
  }
);

export const App = ({history}) => (
  <MuiThemeProvider theme={theme}>
    <AppBar>
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          Title
        </Typography>
      </Toolbar>
    </AppBar>
    <div className="main-container">
      <Router history={history}>
        { Routes }
      </Router>
    </div>
  </MuiThemeProvider>);
App.propTypes = {
  history: PropTypes.object.isRequired
};
