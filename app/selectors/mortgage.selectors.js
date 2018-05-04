import { createSelector } from 'reselect';

const getMortgage = state => state.mortgage;
const toFloatTwo = value => Math.round(value * 100) / 100;
const toFloatMap = values => Object.keys(values)
  .reduce((result, key) => {
    const value = values[key];
    let formatted;
    if (Array.isArray(value)) {
      return value;
      // formatted = value.map(toFloatMap(value.item));
    } else if(typeof value === 'number') {
      formatted = toFloatTwo(value);
      console.log(formatted);
    } else {
      formatted = value;
    }
    return {...result, [key]: formatted};
  }, {});

export const mortgageData = createSelector(
  [getMortgage], (mortgage) => {
    const res = toFloatMap(mortgage);
    console.log(res);
    return res;
  }
);
