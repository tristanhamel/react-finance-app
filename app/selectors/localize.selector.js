import { createSelector } from 'reselect';

const getLocalizationLanguage = state => state.localization.currentLanguage;
const getLocalizationStrings = state => state.localization.strings;

export const strings = createSelector(
  [getLocalizationLanguage, getLocalizationStrings], (lang, st) => st[lang]
);
