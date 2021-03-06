import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import selectors from '../selectors';
import { Grid } from 'material-ui';
import { withStyles } from 'material-ui/styles/index';
import { CompoundForm } from '../components/Compound/CompoundForm';
import { PCompoundData, PCompoundSchedule } from '../proptypes';
import { CompoundChartContainer } from '../components/charts/CompoundChartContainer';

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

class CompoundContainer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if(!this.props.compoundChartData) {
       this.props.initSchedule();
    }
  }

  render() {
    return <Grid container spacing={16}>
      <Grid item xs={12}>
        <CompoundForm
          data={this.props.compoundData}
          onChange={this.props.updateCompoundData}/>
      </Grid>
      <Grid item xs={12}>
        <CompoundChartContainer data={this.props.compoundChartData}/>
      </Grid>
    </Grid>;
  }
}
CompoundContainer.propTypes = {
  compoundData: PCompoundData,
  compoundChartData: PCompoundSchedule,
  updateCompoundData: PropTypes.func,
  initSchedule: PropTypes.func
};

const mapStateToProps = (state) => ({
  compoundData: selectors.compound.compoundData(state),
  compoundChartData: selectors.compound.chartData(state)
});

const mapDispatchToProps = (dispatch) => ({
  updateCompoundData: data => dispatch(actions.compound.update(data)),
  initSchedule: () => dispatch(actions.compound.initSchedule())
});

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(CompoundContainer));
