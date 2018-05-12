import PropTypes from 'prop-types';
import React from 'react';
import Localized from '../localization/Localized';
import { TextField } from 'material-ui';
import { NumberFormatPc } from '../FormattedInputs/NumberFormatPc';

export const CompoundRate = ({value, onChange, ...other}) => {
  return <TextField
    {...other}
    id="rate"
    name="rate"
    label={<Localized>INTEREST_RATE</Localized>}
    value={value || ''}
    onChange={event => onChange(event.target.value)}
    InputProps={{
      inputComponent: NumberFormatPc,
    }} />;
};
CompoundRate.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
};
