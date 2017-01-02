/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react-dom/lib/ReactTestUtils';
import {Header} from './header';

describe('header component', () => {
  it('should render the title of the app', () => {
    const header = TestUtils.renderIntoDocument(<Header/>);
    const appTitle = TestUtils.findRenderedDOMComponentWithTag(header, 'span');
    expect(appTitle.textContent).toEqual('RZ: Peruvian Recipes');
  });
});
