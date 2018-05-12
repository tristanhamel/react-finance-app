import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import Root from './containers/Root';

import './styles/main.scss';

const config = configureStore();
render(
  <PersistGate persistor={config.persistor}>
    <Root store={config.store} history={config.history}/>
  </PersistGate>,
  document.getElementById('root')
);
