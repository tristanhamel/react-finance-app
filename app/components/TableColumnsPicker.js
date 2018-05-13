import PropTypes from 'prop-types';
import React from 'react';
import { IconButton, Menu, Checkbox } from 'material-ui';
import { MenuItem } from 'material-ui/Menu';
import ColumnIcon from '@material-ui/icons/ViewColumn';
import Localized from './localization/Localized';

export class TableColumnsPicker extends React.Component {
  constructor() {
    super();
    this.state = {opened: false};
  }

  toggle() {
    this.setState({opened: !this.state.opened});
  }

  handlePick(item) {
    if(this.props.visibleColumns.includes(item)) {
      this.props.onPick(this.props.visibleColumns.filter(i => i !== item));
    } else {
      this.props.onPick([...this.props.visibleColumns, item]);
    }
  }

  render() {
    const {options, visibleColumns} = this.props;
    return <React.Fragment>
      <IconButton onClick={() => this.toggle()}><ColumnIcon/></IconButton>
      <Menu
        open={this.state.opened}
        onClose={() => this.toggle()}>
        {options.map(option => (
          <MenuItem
            onClick={() => this.handlePick(option.value)}
            key={option.value}>
            <Checkbox checked={visibleColumns.includes(option.value)}/>
            <Localized>{option.label}</Localized>
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>;
  }
}
TableColumnsPicker.propTypes = {
  options: PropTypes.array,
  visibleColumns: PropTypes.array,
  onPick: PropTypes.func
};
