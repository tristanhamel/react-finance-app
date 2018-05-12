import PropTypes from 'prop-types';
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from 'material-ui';
import LanguageIcon from '@material-ui/icons/language';
import CloseIcon from '@material-ui/icons/close';
import LocalizationPicker from './localization/LocalizationPicker';
import Localized from './localization/Localized';
import { Link } from 'react-router-dom';

const MainMenu = ({open, toggle}) => {
  return <Drawer anchor="left" open={open} onClose={() => toggle()}>
    <List style={{width: '350px'}}>
      <ListItem
        onClick={() => toggle()}
        divider>
        <ListItemIcon>
          <CloseIcon />
        </ListItemIcon>
        <ListItemText>
          <Localized>
            CLOSE
          </Localized>
        </ListItemText>
      </ListItem>
    </List>
    <List component="nav">
      <ListItem button component={Link} to="/" onClick={() => toggle()}>
        <ListItemText>
          <Localized>
            MORTGAGE_CALCULATOR
          </Localized>
        </ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/compound_calculator" onClick={() => toggle()}>
        <ListItemText>
          <Localized>
            COMPOUND_INTEREST_CALCULATOR
          </Localized>
        </ListItemText>
      </ListItem>
    </List>
    <List>
      <ListSubheader>
        <Localized>
          SETTINGS
        </Localized>
      </ListSubheader>
      <ListItem>
        <ListItemIcon>
          <LanguageIcon />
        </ListItemIcon>
        <ListItemText>
          <LocalizationPicker />
        </ListItemText>
      </ListItem>
    </List>
  </Drawer>;
};
MainMenu.propTypes = {
  open: PropTypes.bool,
  toggle: PropTypes.func
};

export default MainMenu;
