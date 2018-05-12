const defaultOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};
export const toLocaleString = (date, lang, options = defaultOptions) => {
  return new Date(date).toLocaleString(lang, options);
};

const handleEndsOfMonth = (year, month, day) => {
  const dayExists = date => date.getMonth() === month;
  const checkDay = (yy, mm, dd) => {
    const thisDay = new Date(yy, mm, dd);
    return dayExists(thisDay) ? [yy, mm, dd] : checkDay(yy, mm, dd - 1);
  };
  return checkDay(year, month, day);
};

export const getMonthlyDates = (totalPeriods) => {
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

export const getBiweeklyDates = (totalPeriods) => {
  const now = Date.now();
  const twoWeeks = 14 * 24 * 60 * 60 * 1000;
  const dates = (remainingPeriods, calculated = []) => {
    return remainingPeriods ?
      dates(remainingPeriods - 1, [...calculated, new Date(twoWeeks + calculated[calculated.length - 1] || now)])
      : calculated;
  };
  return dates(totalPeriods);
};

export const getYearlyDates = (totalPeriods) => {
  const now = new Date;
  const dates = (remainingPeriods, calculated = [now]) => {
    const previousYear = calculated[calculated.length - 1];
    const nextItem = new Date(previousYear.getFullYear() + 1, 0, 1);
    return remainingPeriods ?
      dates(remainingPeriods - 1, [...calculated, nextItem])
      : calculated;
  };
  return dates(totalPeriods);
};
