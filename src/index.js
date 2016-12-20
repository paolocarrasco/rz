import React from 'react';
import ReactDOM from 'react-dom';

import {Hello} from './app/hello';
import {Header} from './app/base-components/header';
import {Footer} from './app/base-components/footer';

import './index.scss';

const pageSections = {
  main: <Hello/>,
  header: <Header/>,
  footer: <Footer/>
};

for (const section of pageSections) {
  ReactDOM.render(
    pageSections[section],
    document.querySelector(`body > ${section}`)
  );
}

