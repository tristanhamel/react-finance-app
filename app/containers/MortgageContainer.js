import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import selectors from '../selectors';
import { MortgageForm } from '../components/mortgage/MortgageForm';
import { PMortgageData } from '../proptypes';
import { Grid } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { MortgageAskingPrice } from '../components/mortgage/MortgageAskingPrice';
import { MortgageTools } from '../components/MortgageTools';
import { ConfirmationDialog } from '../components/ConfirmationDialog';
import Localized from '../components/localization/Localized';
import { MortgageTable } from '../components/mortgage/MortgageTable';
import { MortgageChartContainer } from '../components/charts/MortgageChartContainer';

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

class MortgageContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      deleteConfirmationOpened: false
    };
  }

  onReset() {
    this.setState({deleteConfirmationOpened: true});
  }

  onConfirmReset() {
    this.setState({deleteConfirmationOpened: false});
    this.props.resetAll();
  }

  onCancelReset() {
    this.setState({deleteConfirmationOpened: false});
  }

  render() {
    const {
      mortgageData,
      updateMortgageData,
      recalculateMortgageData,
      setActiveScenario,
      displayAsTiles,
      displayAsTable,
      print,
      updateTableOptions,
      activeScenario,
      mortgagePaymentsChartData
    } = this.props;
    const hiddenValues = ['xsDown', 'smDown'];
    const scenarioHiddenProperty = mortgageData.scenarios
      .reduce((map, scenario) => {
        if (scenario.id === mortgageData.activeScenario) {
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
          <MortgageTools
            onDisplayAsTable={() => displayAsTable()}
            onDisplayAsTiles={() => displayAsTiles()}
            onReset={() => this.onReset()}
            onPrint={() => print()}
            displayAs={mortgageData.displayAs}
          />
        </Grid>
        <Grid item xs={12}>
          <MortgageAskingPrice
            askingPrice={mortgageData.askingPrice}
            onChange={data => updateMortgageData(data)}
          />
        </Grid>
        {mortgageData.displayAs === 'tiles' ? mortgageData.scenarios.map(scenarioData => {
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
        }) :
          <Grid item xs={12}>
            <MortgageTable
              data={mortgageData.scenarios}
              onChange={data => updateMortgageData(data)}
              onBlur={(scenarioId) => recalculateMortgageData(scenarioId)}
              activeScenario={mortgageData.activeScenario}
              onSetActiveScenario ={id => setActiveScenario(id)}
              tableOptions={mortgageData.tableOptions}
              onChangeTableOptions={options => updateTableOptions(options)}/>
          </Grid>
        }
        <Grid item xs={12}>
          <MortgageChartContainer
            data={mortgagePaymentsChartData}
            scenario={activeScenario}
          />
        </Grid>
      </Grid>
      <ConfirmationDialog
        onCancel={() => this.onCancelReset()}
        onConfirm={() => this.onConfirmReset()}
        title={<Localized>ARE_YOU_SURE</Localized>}
        open={this.state.deleteConfirmationOpened}>
        <Localized>CONFIRM_RESET</Localized>
      </ConfirmationDialog>
    </div>;
  }
}
MortgageContainer.propTypes = {
  mortgageData: PMortgageData,
  updateMortgageData: PropTypes.func,
  recalculateMortgageData: PropTypes.func,
  setActiveScenario: PropTypes.func,
  displayAsTable: PropTypes.func,
  displayAsTiles: PropTypes.func,
  print: PropTypes.func,
  resetAll: PropTypes.func,
  updateTableOptions: PropTypes.func,
  activeScenario: PropTypes.any,
  mortgagePaymentsChartData: PropTypes.any
};

const mapStateToProps = (state) => ({
  mortgageData: state.mortgage,
  activeScenario: selectors.mortgage.currentScenario(state),
  mortgagePaymentsChartData: selectors.mortgage.mortgagePaymentsChartData(state)
});

const mapDispatchToProps = (dispatch) => ({
  updateMortgageData: data => dispatch(actions.mortgage.update(data)),
  recalculateMortgageData: scenarioId => dispatch(actions.mortgage.recalculate(scenarioId)),
  setActiveScenario: scenarioId => dispatch(actions.mortgage.setActiveScenario(scenarioId)),
  displayAsTable: () => dispatch(actions.mortgage.displayAs('table')),
  displayAsTiles: () => dispatch(actions.mortgage.displayAs('tiles')),
  print: () => dispatch(actions.mortgage.print()),
  resetAll: () => dispatch(actions.mortgage.reset()),
  updateTableOptions: options => dispatch(actions.mortgage.setTableOptions(options))
});

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(MortgageContainer));
