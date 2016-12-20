/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react-dom/lib/ReactTestUtils';
import {Header} from './header';

describe('header component', () => {
  it('should render the title of the app', () => {
    const header = TestUtils.renderIntoDocument(<Header/>);
    const h1 = TestUtils.findRenderedDOMComponentWithTag(header, 'h1');
    expect(h1.textContent).toEqual('RZ: Peruvian Recipes');
  });
});
