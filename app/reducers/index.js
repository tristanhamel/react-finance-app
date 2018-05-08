import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { mortgageReducer as mortgage } from './mortgage.reducer';
import { localizationReducer as localization } from './localization.reducer';

const rootReducer = combineReducers({
  routing,
  mortgage,
  localization
});

export default rootReducer;
