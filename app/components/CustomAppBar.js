import React from 'react';
import { AppBar, Toolbar, IconButton, Typography} from 'material-ui';
import MenuIcon from '@material-ui/icons/Menu';
import MainMenu from './MainMenu';

export class CustomAppBar extends React.Component {
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
          <Typography variant="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
      <MainMenu
        open={this.state.isMenuVisible}
        toggle={() => this.toggleMenu()}
      />
    </React.Fragment>;
  }
}
