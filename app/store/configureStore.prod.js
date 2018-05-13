// import { createBrowserHistory } from 'history';
import { createHashHistory } from 'history';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { routerReducer as routing, routerMiddleware } from 'react-router-redux';
import  thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducers } from '../reducers';

// we need to use hash history to easily deploy to github
// const browserHistory = createBrowserHistory(
const browserHistory = createHashHistory(
  // {basename: BASENAME}
);
const middleware = routerMiddleware(history);

const localizationPersistConfig = {
  key: 'localization',
  storage: storage,
  whiteList: ['currentLanguage']
};
const rootReducer = combineReducers({
  ...reducers,
  routing,
  localization: persistReducer(localizationPersistConfig, reducers.localization)
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['routing']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export function configureStore(initialState) {
  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(thunk, middleware)
  );
  const history = browserHistory;
  const persistor = persistStore(store);
  return {store, persistor, history};
}
