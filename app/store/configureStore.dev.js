import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import  thunk from 'redux-thunk';
import { enableBatching } from 'redux-batched-actions';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

export const history = createHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
  return createStore(
    enableBatching(rootReducer),
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, middleware)
    )
  );
}
