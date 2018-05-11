import PropTypes from 'prop-types';
import React from 'react';
import { TextField, MenuItem } from 'material-ui';
import Localized from '../localization/Localized';
import { MortgageDownPaymentPc } from './MortgageDownPaymentPc';

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
    onBlur={() => onBlur()}
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
  onBlur: PropTypes.func
};
MortgageDownPaymentPc.defaultProps = {
  withLabel: true
};
