import PropTypes from 'prop-types';
import React from 'react';
import { TextField, } from 'material-ui';
import { MenuItem } from 'material-ui/Menu';
import Localized from '../localization/Localized';

export const MortgageAmortizationPeriod = ({value, onChange, onBlur, withLabel}) => {
  const amortizationOptions = [
    {value: 5, label: '5'},
    {value: 10, label: '10'},
    {value: 15, label: '15'},
    {value: 20, label: '20'},
    {value: 25, label: '25'},
    {value: 30, label: '30'}
  ];

  return <TextField
    fullWidth
    select
    id="amortization"
    name="amortization"
    label={withLabel ? <Localized>AMORTIZATION_PERIOD</Localized> : null}
    value={value || ''}
    onBlur={() => onBlur ? onBlur() : null}
    onChange={event => onChange(event.target.value)}>
    {amortizationOptions.map(option => (
      <MenuItem key={option.label + 'years'} value={option.value}>
        {option.label}  &nbsp; <Localized>YEARS</Localized>
      </MenuItem>
    ))}
  </TextField>;
};
MortgageAmortizationPeriod.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  withLabel: PropTypes.bool
};
MortgageAmortizationPeriod.defaultProps = {
  withLabel: true
};
