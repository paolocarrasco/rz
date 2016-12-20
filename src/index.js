import React from 'react';
import ReactDOM from 'react-dom';

import {Hello} from './app/hello';
import {Header} from './app/base-components/header';
import {Footer} from './app/base-components/footer';

import './index.scss';

ReactDOM.render(
  <Hello/>,
  document.querySelector('body > main')
);

ReactDOM.render(
  <Header/>,
  document.querySelector('body > header')
);

ReactDOM.render(
  <Footer/>,
  document.querySelector('body > footer')
);
