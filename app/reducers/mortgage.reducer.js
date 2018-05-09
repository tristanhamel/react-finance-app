import * as actions from '../actions/types';

export const initialState = {
  askingPrice: null,
  activeScenario: 1,
  displayAs: 'tiles',
  scenarios: [1, 2, 3].map((i) => ({
    id: i,
    totalPayment: null,
    totalInterest: null,
    rate: null,
    periodRate: null,
    amortization: null,
    downPayment: null,
    downPaymentPc: null,
    downPaymentMode: 'pc',
    askingPrice: null,
    period: 'monthly',
    schedule: null
  }))
};

export const mortgageReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.MORTGAGE_UPDATE_ASKING_PRICE: {
      return {
        ...state,
        askingPrice: payload
      };
    }

    case actions.MORTGAGE_UPDATE_ACTIVE_SCENARIO: {
      return {...state, activeScenario: payload};
    }

    case actions.MORTGAGE_UPDATE_SCENARIO: {
      return {
        ...state,
        scenarios: state.scenarios
          .map(item => item.id === payload.id ? {...item, ...payload} : item)
      };
    }

    case actions.MORTGAGE_RESET: {
      return initialState;
    }

    case actions.MORTGAGE_DISPLAY_AS: {
      return {...state, displayAs: payload};
    }

    default:
      return initialState;
  }
};
