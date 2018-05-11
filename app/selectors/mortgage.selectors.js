import { createSelector } from 'reselect';

const getMortgage = state => state.mortgage;
const getCurrentScenarioId = state => state.mortgage.activeScenario;
const getMortgaeScenarios = state => state.mortgage.scenarios;
const toFloatTwo = value => Math.round(value * 100) / 100;

const getBiweeklyDates = (totalPeriods) => {
  const now = Date.now();
  const twoWeeks = 14 * 24 * 60 * 60 * 1000;
  const dates = (remainingPeriods, calculated = []) => {
    return remainingPeriods ?
      dates(remainingPeriods - 1, [...calculated, new Date(twoWeeks + calculated[calculated.length - 1] || now)])
      : calculated;
  };
  return dates(totalPeriods);
};
const handleEndsOfMonth = (year, month, day) => {
  const dayExists = date => date.getMonth() === month;
  const checkDay = (yy, mm, dd) => {
    const thisDay = new Date(yy, mm, dd);
    return dayExists(thisDay) ? [yy, mm, dd] : checkDay(yy, mm, dd - 1);
  };
  return checkDay(year, month, day);
};
const getMonthlyDates = (totalPeriods) => {
  const now = new Date();
  const thisYear = now.getFullYear();
  const thisMonth = now.getMonth();
  const thisDay = now.getDate();

  const dates = (remainingPeriods, calculated = []) => {
    const previousDate = calculated[calculated.length - 1];
    if(!remainingPeriods) {
      return calculated;
    }
    const nextMonth = previousDate[1] === 11 ? 0 : previousDate[1] + 1;
    const nextYear = nextMonth === 0 ? previousDate[0] + 1 : previousDate[0];
    const newDate = handleEndsOfMonth(nextYear, nextMonth, thisDay);
    return  dates(remainingPeriods - 1, [...calculated, newDate]);
  };
  return dates(totalPeriods, [[thisYear, thisMonth, thisDay]]);
};
const getPaymentDates = (totalPeriods, recurrence) => {
  return recurrence === 'monthly' ?
    getMonthlyDates(totalPeriods).map(time => new Date(...time)) :
    getBiweeklyDates(totalPeriods).map(time => new Date(time));
};

export const currentScenario = createSelector(
  [getMortgaeScenarios, getCurrentScenarioId],
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
