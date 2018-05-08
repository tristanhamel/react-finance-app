import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'material-ui';
import actions from '../../actions';

const LocalizationPicker = ({options, active, selectLanguage}) => {
  return <div>
    {options.map(option => {
      return <Button
        size="small"
        color={active === option.value ? 'primary' : 'default'}
        onClick={() => selectLanguage(option.value)}
        key={option.value}>
        {option.label}
      </Button>;
    })}
  </div>;
};
LocalizationPicker.propTypes = {
  options: PropTypes.array,
  active: PropTypes.string,
  selectLanguage: PropTypes.func
};

const mapStateToProps = state => ({
  options: state.localization.availableLanguages,
  active: state.localization.currentLanguage
});

const mapDispatchToProps = dispatch => ({
  selectLanguage: language => dispatch(actions.localization.setLanguage(language))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocalizationPicker);
