import PropTypes from 'prop-types';
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from 'material-ui';
import LanguageIcon from '@material-ui/icons/language';
import LocalizationPicker from './localization/LocalizationPicker';


const MainMenu = ({open, toggle}) => {
  return <Drawer anchor="left" open={open} onClose={() => toggle()}>
    <List style={{width: '350px'}}>
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
