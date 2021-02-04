import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/index'
import './assets/css/common.less'
import './assets/css/font.css'
import './assets/css/iconfont.css'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
