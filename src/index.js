import React from 'react';
import ReactDOM from 'react-dom';

import {Landing} from './app/landing';
import {Header} from './app/base-components/header';
import {Footer} from './app/base-components/footer';

import './index.scss';

const pageSections = {
  main: <Landing/>,
  header: <Header/>,
  footer: <Footer/>
};

for (const sectionName of Object.keys(pageSections)) {
  ReactDOM.render(
    pageSections[sectionName],
    document.querySelector(`body > ${sectionName}`)
  );
}

