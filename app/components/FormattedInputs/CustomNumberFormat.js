import PropTypes from 'prop-types';
import React from 'react';
import NumberFormat from 'react-number-format';

export class CustomNumberFormat extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.isAllowed = () => true;
    this.allowNegative = false;
    this.fixedDecimalScale = false;
    this.decimalScale = 2;
  }

  render() {
    const {inputRef, onChange, ...other} = this.props;
    return <NumberFormat
      {...other}
      ref={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.floatValue,
          }
        });
      }}
      thousandSeparator
      isAllowed={this.isAllowed}
      allowNegative={this.allowNegative}
      prefix={this.prefix}
      suffix={this.suffix}
      fixedDecimalScale={this.fixedDecimalScale}
      decimalScale={this.decimalScale}
    />;
  }
}
CustomNumberFormat.propTypes = {
  inputRef: PropTypes.func,
  onChange: PropTypes.func
};
