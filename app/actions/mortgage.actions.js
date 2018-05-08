import * as actions from './types';

export function setActiveScenario(id) {
  return(dispatch, getState) => {
    if(getState().mortgage.activeScenario === id) {
      return;
    }

    dispatch({type: actions.MORTGAGE_UPDATE_ACTIVE_SCENARIO, payload: id});
  };
}

export function update(data) {
  return (dispatch, getState) => {
    if(data.hasOwnProperty('askingPrice')) {
      dispatch({type: actions.MORTGAGE_UPDATE_ASKING_PRICE, payload: data.askingPrice});
      getState().mortgage.scenarios.forEach(scenario => dispatch(recalculate(scenario.id)));
    } else {
      dispatch({type: actions.MORTGAGE_UPDATE_SCENARIO, payload: data});
      dispatch(recalculate(data.id));
    }
  };
}

export function recalculate(scenarioId) {
  return (dispatch, getState) => {
    const { mortgage } = getState();
    const mortgageItem = mortgage.scenarios.find(scenario => scenario.id === scenarioId);
    if(!mortgage.askingPrice || !mortgageItem.rate || !mortgageItem.amortization) {
      return;
    }
    const updated = computedValues(mortgage.askingPrice, mortgageItem);
    dispatch({type: actions.MORTGAGE_UPDATE_SCENARIO, payload: updated});
  };
}

function computedValues(askingPrice, data) {
  const getDownPaymentPc = () => {
    data.downPaymentPc = data.askingPrice && data.downPayment ?
      Math.round(100 * data.downPayment / askingPrice) / 100 : data.downPaymentPc;
  };
  const getDownPaymentAbs = () => {
    data.downPayment = askingPrice && data.downPaymentPc ?
      Math.round(100 * data.downPaymentPc * askingPrice) / 100 : data.downPayment;
  };
  const getDownPayment = () => {
    if(!askingPrice) {
      return;
    }
    if(data.downPaymentMode === 'pc') {
      getDownPaymentAbs();
    } else  {
      getDownPaymentPc();
    }
  };
  const getTotalRequired = () => {
    if(!data.downPayment) {
      return;
    }
    data.totalRequired = askingPrice && data.downPayment ?
      askingPrice - data.downPayment : null;
  };
  const getPeriodRate = () => {
    if(!data.rate || !data.period || !data.amortization) {
      return;
    }
    if(data.period === 'monthly') {
      data.periodRate = data.rate / (12 * 100);
    }

    if(data.period === 'biweekly') {
      data.periodRate = data.rate / (26 * 100);
    }
  };
  const getTotalPeriods = () => {
    if(!data.periodRate) {
      return;
    }
    const perYear = data.period === 'monthly' ? 12 : 26;
    data.totalPeriods = data.amortization * perYear;
  };
  const getAnnuity = () => {
    if(!data.totalPeriods) {
      return;
    }
    data.annuity = data.totalRequired *
    (
      data.periodRate * Math.pow((data.periodRate + 1), data.totalPeriods) /
      ((Math.pow(data.periodRate + 1, data.totalPeriods)) - 1)
    );
  };
  const getSchedule = () => {
    if(!data.annuity) {
      return;
    }

    const getScheduleItems = (schedule, remainingPeriods) => {
      const last = schedule[schedule.length - 1];
      const paidInterest = last.remainingPrincipal * data.periodRate;
      const totalInterest = last.totalInterest + paidInterest;
      const paidPrincipal = data.annuity - paidInterest;
      const remainingPrincipal = Math.max(0, last.remainingPrincipal - paidPrincipal);
      const updated = [...schedule, {
        remainingPrincipal,
        paidPrincipal,
        paidInterest,
        totalInterest
      }];
      return remainingPeriods ? getScheduleItems(updated, remainingPeriods - 1) : updated;
    };

    data.schedule = getScheduleItems([{
      remainingPrincipal: data.totalRequired,
      paidPrincipal: 0,
      paidInterest: 0,
      totalInterest: 0
    }], data.totalPeriods - 1);
  };
  const getTotalInterest = () => {
    if(!data.schedule) {
      return this;
    }
    data.totalInterest = data.schedule[data.schedule.length - 1].totalInterest;
    data.totalPayment = data.totalInterest + data.totalRequired;
    return this;
  };

  getDownPayment();
  getTotalRequired();
  getPeriodRate();
  getTotalPeriods();
  getAnnuity();
  getSchedule();
  getTotalInterest();
  return data;
}
