import { createSelector } from 'reselect';
import { getMonthlyDates, getYearlyDates } from '../utils/dates';

const getCompoundData = state => state.compound;
const getSchedule = state => state.compound.schedule;
const toFloatTwo = value => Math.round(value * 100) / 100;

export const compoundData = createSelector(
  [getCompoundData, getSchedule],
  (data, schedule) => {
    const lastScheduleItem = schedule && schedule.length ? schedule[schedule.length - 1] : {};
    return {
      ...data,
      totalInterest: lastScheduleItem.totalInterest || null,
      totalContribution: lastScheduleItem.totalContribution || null,
      totalValue: lastScheduleItem.totalValue || null
    };
  }
);

const getDates = createSelector(
  [getCompoundData],
  data => {
    const { interestPeriod, duration } = data;
    const totalPeriods = interestPeriod === 'monthly' ? 12 * duration : duration;
    return interestPeriod === 'monthly' ? getMonthlyDates(totalPeriods) : getYearlyDates(totalPeriods);
  }
);

export const chartData = createSelector(
  [getSchedule, getDates],
  (schedule, dates) => {
    if(!schedule || !schedule.length) {
      return null;
    }
    return schedule
      .map((item, i) => ({
        date: dates[i],
        totalValue: toFloatTwo(item.totalValue),
        totalInterest: toFloatTwo(item.totalValue),
        paidInterest: toFloatTwo(item.paidInterest),
        totalContribution: toFloatTwo(item.totalContribution)
      }));
  }
);
