import PropTypes from 'prop-types';
import { CustomNumberFormat } from './CustomNumberFormat';

export class NumberFormatPc extends CustomNumberFormat {
  constructor(props) {
    super();
    this.props = props;
    this.prefix = '%';
    this.isAllowed = values => values.floatValue <= 100;
    this.fixedDecimalScale = true;
  }
}
NumberFormatPc.propTypes = {
  inputRef: PropTypes.func,
  onChange: PropTypes.func
};
