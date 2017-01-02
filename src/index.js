import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import routes from './routing';

import './index.scss';

render(
  <Router history={hashHistory} routes={routes}/>,
  document.querySelector('#app')
);
