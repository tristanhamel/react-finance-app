import PropTypes from 'prop-types';
import React from 'react';
import { IconButton, Select, Input, MenuItem, Checkbox, ListItemText } from 'material-ui';
import ColumnIcon from '@material-ui/icons/ViewColumn';
import Localized from './localization/Localized';

export const TableColumnsPicker = ({options, visibleColumns, onPick}) => {
  return <React.Fragment>
    <Select
      multiple
      value={visibleColumns}
      onChange={e => onPick(e.target.value)}
      input={<Input id="select-multiple-checkbox" />}
      renderValue={() => <IconButton><ColumnIcon/></IconButton>}>
      {options.map(option => (
        <MenuItem
          key={option.value}
          value={option.value}>
          <Checkbox checked={visibleColumns.includes(option.value)} />
          <Localized>{option.label}</Localized>
        </MenuItem>
      ))}
    </Select>
  </React.Fragment>;
};
TableColumnsPicker.propTypes = {
  options: PropTypes.array,
  visibleColumns: PropTypes.array,
  onPick: PropTypes.func
};
