import React from 'react';
import {Route, IndexRoute} from 'react-router';
import BaseStructure from './app/base-components/base-structure';
import Landing from './app/landing';

export default (
  <Route path="/" component={BaseStructure}>
    <IndexRoute component={Landing}/>
  </Route>
);
