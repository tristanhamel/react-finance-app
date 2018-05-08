import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import selectors from '../selectors';
import { MortgageForm } from '../components/MortgageForm';
import { PMortgageData } from '../proptypes';
import { Grid } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { MortgageAskingPrice } from '../components/MortgageAskingPrice';

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

const MortgageContainer = ({mortgageData, updateMortgageData, recalculateMortgageData, setActiveScenario}) => {
  const hiddenValues = ['xsDown', 'smDown'];
  const scenarioHiddenProperty = mortgageData.scenarios
    .reduce((map, scenario) => {
      if(scenario.id === mortgageData.activeScenario) {
        return map;
      }
      return {
        ...map,
        [scenario.id]: {[hiddenValues.shift()]: true}
      };
    }, {[mortgageData.activeScenario]: {}});

  return <div>
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <MortgageAskingPrice
          askingPrice={mortgageData.askingPrice}
          onChange={data => updateMortgageData(data)}
        />
      </Grid>
      {mortgageData.scenarios.map(scenarioData => {
        return <Grid
          item xs={12} sm={6} md={4}
          hidden={scenarioHiddenProperty[scenarioData.id]}
          key={scenarioData.id}
          onClick={() => setActiveScenario(scenarioData.id)}>
          <MortgageForm
            data={scenarioData}
            isActive={mortgageData.activeScenario === scenarioData.id}
            onChange={data => updateMortgageData({...data, id: scenarioData.id})}
            onBlur={() => recalculateMortgageData(scenarioData.id)}/>
        </Grid>;
      })}
    </Grid>
  </div>;
};
MortgageContainer.propTypes = {
  mortgageData: PMortgageData,
  updateMortgageData: PropTypes.func,
  recalculateMortgageData: PropTypes.func,
  setActiveScenario: PropTypes.func
};

const mapStateToProps = (state) => ({
  mortgageData: state.mortgage
  // mortgageData: selectors.mortgage.mortgageData(state)
});

const mapDispatchToProps = (dispatch) => ({
  updateMortgageData: data => dispatch(actions.mortgage.update(data)),
  recalculateMortgageData: scenarioId => dispatch(actions.mortgage.recalculate(scenarioId)),
  setActiveScenario: scenarioId => dispatch(actions.mortgage.setActiveScenario(scenarioId))
});

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(MortgageContainer));
