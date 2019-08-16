import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RouterControl from './RouterControl';
import { store } from './store';
import './styles/index.less';

ReactDOM.render(
  <Provider store={store}>
    <RouterControl />
  </Provider>,
  document.getElementById('root'),
);
