import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './helpers/store';
import Root from './root';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/styles.scss';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const store = configureStore();

render((
  <AppContainer>
    <Provider store={store}>
      <HashRouter>
        <Root />
      </HashRouter>
    </Provider>
  </AppContainer>
  
), document.getElementById('root'));
