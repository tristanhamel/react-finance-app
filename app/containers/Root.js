import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import { hot } from 'react-hot-loader';
import { App } from '../components/App';

const Root = ({store, history}) =>
  <Provider store={store}>
    <App history={history} />
  </Provider>;

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default hot(module)(Root);
