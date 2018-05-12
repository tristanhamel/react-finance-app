import MortgageContainer from '../containers/MortgageContainer';
import CompoundContainer from '../containers/CompoundContainer';

export const routes = [
  {
    path: '/mortgage_calculator',
    component: MortgageContainer,
    titleLocalizationLabel: 'MORTGAGE_CALCULATOR'
  },
  {
    path: '/compound_calculator',
    component: CompoundContainer,
    titleLocalizationLabel: 'COMPOUND_INTEREST'
  }
];
