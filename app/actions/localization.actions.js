import * as actions from './types';

export function setLanguage(language) {
  return (dispatch, getState) => {
    if(language !== getState().localization.currentLanguage) {
      dispatch({type: actions.LOCALIZATION_SET_LANG, payload: language});
    }
  };
}
