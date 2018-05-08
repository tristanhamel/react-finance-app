import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import  thunk from 'redux-thunk';
import { enableBatching } from 'redux-batched-actions';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import rootReducer from '../reducers';
import { localizationReducer as localization } from '../reducers/localization.reducer';

export const history = createHistory();
const middleware = routerMiddleware(history);

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['localization']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export function configureStore(initialState) {
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, middleware))
  );
  const persistor = persistStore(store);
  return {store, persistor};
}
