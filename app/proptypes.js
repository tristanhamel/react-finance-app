import PropTypes from 'prop-types';

export const PMortgageScheduleItem = PropTypes.shape({
  remainingPeriods: PropTypes.number,
  paidInterest: PropTypes.number,
  paidPrincipal: PropTypes.number,
  totalInterest: PropTypes.number,
  totalPrincipal: PropTypes.number
});

export const PMortgageSchedule = PropTypes.arrayOf(PMortgageScheduleItem);

export const PScenario = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  totalPayment: PropTypes.number,
  totalInterest: PropTypes.number,
  rate: PropTypes.number,
  periodRate: PropTypes.number,
  amortization: PropTypes.number,
  downPayment: PropTypes.number,
  downPaymentPc: PropTypes.number,
  downPaymentMode: PropTypes.oneOf(['pc', 'currency']),
  period: PropTypes.oneOf(['monthly', 'biweekly']),
  schedule: PMortgageSchedule
});

export const PMortgageData = PropTypes.shape({
  askingPrice: PropTypes.number,
  activeScenario: PropTypes.number,
  displayAs: PropTypes.oneOf(['table', 'tiles']),
  tableOptions: PropTypes.shape({
    visibleOptions: PropTypes.arrayOf(PropTypes.string)
  }),
  scenarios: PropTypes.arrayOf(PScenario)
});

export const PCompoundScheduleItem = PropTypes.shape({
  remainingPeriods: PropTypes.number,
  paidInterest: PropTypes.number,
  totalInterest: PropTypes.number,
  totalContribution: PropTypes.number,
  totalValue: PropTypes.number
});

export const PCompoundSchedule = PropTypes.arrayOf(PCompoundScheduleItem);

export const PCompoundData = PropTypes.shape({
  monthlyContribution: PropTypes.number,
  interestPeriod: PropTypes.oneOf(['monthly', 'annually']),
  duration: PropTypes.number,
  interestRate: PropTypes.number,
  schedule: PCompoundSchedule
});
