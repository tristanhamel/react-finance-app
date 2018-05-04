import * as actions from '../actions/types';

export const initialState = {
  totalPayment: null,
  totalInterest: null,
  rate: null,
  periodRate: null,
  amortization: null,
  totalRequired: null,
  downPayment: null,
  downPaymentPc: null,
  downPaymentMode: 'pc',
  askingPrice: null,
  period: 'monthly',
  schedule: null
};

export const mortgageReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.MORTGAGE_UPDATE: {
      return {...state, ...payload};
    }
    default:
      return initialState;
  }
};
