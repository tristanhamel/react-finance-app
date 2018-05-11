import PropTypes from 'prop-types';

export const PMortgageData = PropTypes.shape({
  totalPayment: PropTypes.number,
  totalInterest: PropTypes.number,
  rate: PropTypes.number,
  amortization: PropTypes.number,
  totalRequired: PropTypes.number,
  downPayment: PropTypes.number,
  downPaymentPc: PropTypes.number,
  downPaymentMode: PropTypes.oneOf(['pc', 'currency']),
  askingPrice: PropTypes.number,
  scenarios: PropTypes.array
});

const questionCategories = [
  'social',
  'fragment',
  'getData'
];
export const PQuestionCategories = PropTypes.oneOf(questionCategories);

const questionTypes = [
  null,
  'opened',
  'choices',
  'range',
  'location'
];
export const PQuestionTypes = PropTypes.oneOf(questionTypes);

// ANSWERS
export const Answer = {
  id: PropTypes.string,
  question_id: PropTypes.string,
  user_id: PropTypes.string,
  text: PropTypes.string,
  formatted_text: PropTypes.string,
  created_at: PropTypes.instanceOf(Date),
  synced: PropTypes.bool
};

export const PAnswer = PropTypes.shape(Answer);

// QUESTIONS
export const Question = {
  id: PropTypes.string,
  text: PropTypes.string,
  category: PQuestionCategories,
  type: PQuestionTypes
};

export const PQuestion = PropTypes.shape(Question);

// USER
export const User = {
  name: PropTypes.string,
  organization: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  comingBack: PropTypes.bool,
  token: PropTypes.string,
  completedQuestionnaire: PropTypes.bool,
  isRobot: PropTypes.bool,
  id: PropTypes.string
};

export const PUser = PropTypes.shape(User);
