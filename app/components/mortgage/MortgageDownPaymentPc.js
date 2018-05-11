import PropTypes from 'prop-types';
import React from 'react';
import { TextField, MenuItem } from 'material-ui';
import { NumberFormatPc } from '../FormattedInputs/NumberFormatPc';
import Localized from '../localization/Localized';

export const MortgageDownPaymentPc = ({value, onBlur, onChange, withLabel }) => {
  const downPaymentPcOptions = [
    {value: 0.05, label: '5%'},
    {value: 0.10, label: '10%'},
    {value: 0.15, label: '15%'},
    {value: 0.20, label: '20%'},
    {value: 0.30, label: '30%'},
    {value: 0.40, label: '40%'},
    {value: 0.50, label: '50%'}
  ];

  return <TextField
    select
    fullWidth
    id="downPaymentPc"
    name="downPaymentPc"
    label={withLabel ? <Localized>DOWN_PAYMENT</Localized> : null}
    value={value || ''}
    onBlur={() => onBlur()}
    onChange={event => onChange(event.target.value)}
    InputProps={{
      inputComponent: NumberFormatPc,
    }}>
    {downPaymentPcOptions.map(option => (
      <MenuItem key={option.label} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
    {!downPaymentPcOptions.some(item => item.value === value) ?
      <MenuItem key={value} value={value}>
        {value * 100}%
      </MenuItem> : ''
    }
  </TextField>;
};
MortgageDownPaymentPc.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  withLabel: PropTypes.bool
};
MortgageDownPaymentPc.defaultProps = {
  withLabel: true
};
