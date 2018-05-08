import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import selectors from '../../selectors';

const Localized = ({strings, children}) => {
  return <span>{strings[children]}</span>;
};
Localized.propTypes = {
  children: PropTypes.node,
  strings: PropTypes.any
};

const mapStateToProps = (state) => ({
  strings: selectors.localization.strings(state)
});

export default connect(mapStateToProps)(Localized);
