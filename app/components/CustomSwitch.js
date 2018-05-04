import PropTypes from 'prop-types';
import React from 'react';
import { Switch, Typography } from 'material-ui';

import './CustomSwitch.scss';

export const CustomSwitch = ({right, left, onChange, value}) => {
  return (
    <div className="custom-switch">
      <Typography>{left.label}</Typography>
      <Switch
        defaultChecked
        value=""
        color="default"
        checked={value === right.value}
        onChange={() => onChange(value === left.value ? right.value : left.value)}
      />
      <Typography>{right.label}</Typography>
    </div>
  );
};
const POption = PropTypes.shape({
  label: PropTypes.any,
  value: PropTypes.any
});
CustomSwitch.propTypes = {
  left: POption,
  right: POption,
  onChange: PropTypes.func,
  value: PropTypes.any
};

