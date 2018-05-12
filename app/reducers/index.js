import { routerReducer as routing } from 'react-router-redux';
import { mortgageReducer as mortgage } from './mortgage.reducer';
import { localizationReducer as localization } from './localization.reducer';
import { compoundReducer as compound } from './compound.reducer';

export const reducers = {
  routing,
  mortgage,
  localization,
  compound
};