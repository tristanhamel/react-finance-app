import * as actions from './types';

export function initSchedule() {
  return (dispatch, getState) => {
    if(getState().compound.schedule) {
      return;
    }

    dispatch(getSchedule());
  };
}

export function update(data) {
  return (dispatch) => {
    dispatch({type: actions.COMPOUND_UPDATE, payload: data});
    dispatch(getSchedule());
  };
}

export function getSchedule() {
  return (dispatch, getState) => {
    const {monthlyContribution, duration, interestPeriod, interestRate } = getState().compound;
    const currentSchedule = getState().compound.schedule;
    if((!monthlyContribution || ! duration || !interestPeriod) && currentSchedule) {
      dispatch(update({schedule: null}));
    }
    const totalPeriods = interestPeriod === 'monthly' ? duration * 12 : duration;
    const periodInterestRate = interestPeriod === 'monthly' ? interestRate / 1200 : interestRate / 100;
    const getScheduleItem = (schedule) => {
      const previousItem = schedule[schedule.length - 1];
      const remainingPeriods = previousItem.remainingPeriods - 1;
      const paidInterest = previousItem.totalValue * periodInterestRate;
      const totalInterest = previousItem.totalInterest + paidInterest;
      const totalContribution = previousItem.totalContribution + monthlyContribution;
      const totalValue = previousItem.totalValue + paidInterest + monthlyContribution;
      const newItem = {
        remainingPeriods,
        paidInterest,
        totalInterest,
        totalContribution,
        totalValue
      };
      const updated = [...schedule, newItem];
      return remainingPeriods ? getScheduleItem(updated) : updated;
    };

    const seed = {
      remainingPeriods: totalPeriods,
      totalValue: 500,
      totalInterest: 0,
      totalContribution: 500,
    };
    const schedule = getScheduleItem([seed]);
    dispatch({type: actions.COMPOUND_UPDATE, payload: {schedule}});
  };
}
