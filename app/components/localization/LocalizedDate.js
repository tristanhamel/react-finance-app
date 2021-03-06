import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { toLocaleString } from '../../utils/dates';

const LocalizedDate = ({lang, children, format}) => {
  return format ? <span>{toLocaleString(children, lang, format)}</span> :
    <span>{toLocaleString(children, lang)}</span>;
};
LocalizedDate.propTypes = {
  children: PropTypes.any,
  lang: PropTypes.string,
  format: PropTypes.object
};

const mapStateToProps = (state) => ({
  lang: state.localization.currentLanguage
});

export default connect(mapStateToProps)(LocalizedDate);
