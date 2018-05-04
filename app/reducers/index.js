import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { mortgageReducer as mortgage } from './mortgage.reducer';

const rootReducer = combineReducers({
  routing,
  mortgage
});

export default rootReducer;