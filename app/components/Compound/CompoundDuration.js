import PropTypes from 'prop-types';
import React from 'react';
import { TextField, MenuItem } from 'material-ui';
import Localized from '../localization/Localized';

export const CompoundDuration = ({value, onChange, ...other}) => {
  const options = [
    {value: 5, label: '5'},
    {value: 10, label: '10'},
    {value: 15, label: '15'},
    {value: 20, label: '20'},
    {value: 25, label: '25'},
    {value: 30, label: '30'}
  ];

  return <TextField
    {...other}
    select
    id="amortization"
    name="amortization"
    label={<Localized>DURATION</Localized>}
    value={value || ''}
    onChange={event => onChange(event.target.value)}>
    {options.map(option => (
      <MenuItem key={option.label + 'years'} value={option.value}>
        {option.label}  &nbsp; <Localized>YEARS</Localized>
      </MenuItem>
    ))}
  </TextField>;
};
CompoundDuration.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
};
