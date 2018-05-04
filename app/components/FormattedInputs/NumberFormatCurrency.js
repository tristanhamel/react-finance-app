import PropTypes from 'prop-types';
import { CustomNumberFormat } from './CustomNumberFormat';

export class NumberFormatCurrency extends CustomNumberFormat {
  constructor(props) {
    super();
    this.props = props;
    this.prefix = '$';
    this.fixedDecimalScale = true;
  }
}
NumberFormatCurrency.propTypes = {
  inputRef: PropTypes.func,
  onChange: PropTypes.func
};
