import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import selectors from '../selectors';
import { Mortgage } from '../components/Mortgage';
import { PMortgageData } from '../proptypes';
import { Grid } from 'material-ui';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const MortgageContainer = ({mortgageData, updateMortgageData, recalculateMortgageData}) => {
  return <Grid container spacing={8}>
    <Grid item xs={12}>
      <Mortgage data={mortgageData}
                onChange={data => updateMortgageData(data)}
                onBlur={() => recalculateMortgageData()}/>
    </Grid>
  </Grid>;
};
MortgageContainer.propTypes = {
  mortgageData: PMortgageData,
  updateMortgageData: PropTypes.func,
  recalculateMortgageData: PropTypes.func
};

const mapStateToProps = (state) => ({
  mortgageData: state.mortgage
  // mortgageData: selectors.mortgage.mortgageData(state)
});

const mapDispatchToProps = (dispatch) => ({
  updateMortgageData: data => dispatch(actions.mortgage.update(data)),
  recalculateMortgageData: () => dispatch(actions.mortgage.recalculate())
});

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(MortgageContainer));
