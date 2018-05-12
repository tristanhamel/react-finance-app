import * as actions from '../actions/types';

export const initialState = {
  initialCapital: 0,
  monthlyContribution: 500,
  interestPeriod: 'monthly',
  interestRate: 3,
  duration: 20,
  schedule: null
};

export const compoundReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.COMPOUND_UPDATE:
      return {...state, ...payload};
    case actions.COMPOUND_RESET:
      return initialState;
    default:
      return state;
  }
};
