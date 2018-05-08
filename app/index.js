import React from 'react';
import {Provider} from 'react';
import { render } from 'react-dom';
import { configureStore, history } from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react'
import Root from './containers/Root';

import './styles/main.scss';

const config = configureStore();
render(
  <PersistGate persistor={config.persistor}>
    <Root store={config.store} history={history}/>
  </PersistGate>,
  document.getElementById('root')
);
