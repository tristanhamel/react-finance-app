import PropTypes from 'prop-types';
import React from 'react';
import Localized from './localization/Localized';
import { TextField } from 'material-ui';
import { NumberFormatPc } from './FormattedInputs/NumberFormatPc';
import { MortgageDownPaymentPc } from './MortgageDownPaymentPc';

export const MortgageRate = ({value, onBlur, onChange, withLabel, ...other}) => {
  return <TextField
    {...other}
    fullWidth
    id="rate"
    name="rate"
    label={withLabel ? <Localized>MORTGAGE_RATE</Localized> : null}
    value={value || ''}
    onBlur={() => onBlur()}
    onChange={event => onChange(event.target.value)}
    InputProps={{
      inputComponent: NumberFormatPc,
    }} />;
};
MortgageRate.propTypes = {
  value: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  withLabel: PropTypes.bool
};
MortgageDownPaymentPc.defaultProps = {
  withLabel: true
};
