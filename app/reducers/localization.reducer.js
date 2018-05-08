import * as actions from '../actions/types';
import localization from '../localization';

export const initialState = {
  currentLanguage: 'en',
  availableLanguages: [
    {label: 'English', value: 'en'},
    {label: 'Français', value: 'fr'}
  ],
  strings: {
    en: localization.en,
    fr: localization.fr
  }
};

export const localizationReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.LOCALIZATION_SET_LANG: {
      return {
        ...state,
        currentLanguage: payload
      };
    }

    default:
      return state;
  }
};
