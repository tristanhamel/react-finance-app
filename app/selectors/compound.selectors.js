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
    const { duration } = data;
    return getYearlyDates(duration);
  }
);

export const chartData = createSelector(
  [getCompoundData, getSchedule, getDates],
  (data, schedule, dates) => {
    if(!schedule || !schedule.length) {
      return null;
    }
    return schedule
      .filter((item, i) => {
        return data.interestPeriod === 'monthly' ? i % 12 === 0 : true;
      })
      .map((item, i) => ({
        date: dates[i],
        totalValue: toFloatTwo(item.totalValue),
        totalInterest: toFloatTwo(item.totalInterest),
        paidInterest: toFloatTwo(item.paidInterest),
        totalContribution: toFloatTwo(item.totalContribution)
      }));
  }
);
