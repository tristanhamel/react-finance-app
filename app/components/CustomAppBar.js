import PropTypes from 'prop-types';
import React from 'react';
import { AppBar, Toolbar, IconButton } from 'material-ui';
import MenuIcon from '@material-ui/icons/Menu';
import MainMenu from './MainMenu';
import { PageTitle } from './PageTitle';
import { withRouter } from 'react-router-dom';

class AppBarComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      isMenuVisible: false
    };
  }
  toggleMenu() {
    this.setState({isMenuVisible: !this.state.isMenuVisible});
  }

  render() {
    return <React.Fragment>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon onClick={() => this.toggleMenu()}/>
          </IconButton>
          <PageTitle currentPath={this.props.location.pathname}/>
        </Toolbar>
      </AppBar>
      <MainMenu
        open={this.state.isMenuVisible}
        toggle={() => this.toggleMenu()}
      />
    </React.Fragment>;
  }
}
AppBarComponent.propTypes = {
  location: PropTypes.any
};

export const CustomAppBar = withRouter(props => <AppBarComponent {...props}/>);
