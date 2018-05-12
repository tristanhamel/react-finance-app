import { createSelector } from 'reselect';
import { getMonthlyDates, getBiweeklyDates } from '../utils/dates';

const getCurrentScenarioId = state => state.mortgage.activeScenario;
const getMortgageScenarios = state => state.mortgage.scenarios;
const toFloatTwo = value => Math.round(value * 100) / 100;

const getPaymentDates = (totalPeriods, recurrence) => {
  return recurrence === 'monthly' ?
    getMonthlyDates(totalPeriods).map(time => new Date(...time)) :
    getBiweeklyDates(totalPeriods).map(time => new Date(time));
};

export const currentScenario = createSelector(
  [getMortgageScenarios, getCurrentScenarioId],
  (scenarios, id) => scenarios.find(scenario => scenario.id === id)
);

export const mortgagePaymentDates = createSelector(
  currentScenario,
  scenario => {
    if(!scenario.totalPeriods || !scenario.period) {
      return null;
    }
    return getPaymentDates(scenario.totalPeriods, scenario.period);
  }
);

export const mortgagePaymentsChartData = createSelector(
  [currentScenario, mortgagePaymentDates],
  (scenario, dates) => {
    if(!scenario.schedule || !dates) {
      return null;
    }
    return scenario.schedule
      .map((item, i) => ({
        date: dates[i],
        remainingPrincipal: toFloatTwo(item.remainingPrincipal),
        paidPrincipal: toFloatTwo(item.paidPrincipal),
        paidInterest: toFloatTwo(item.paidInterest),
        totalInterest: toFloatTwo(item.totalInterest)
      }));
  }
);
