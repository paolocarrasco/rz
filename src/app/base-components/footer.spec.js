/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react-dom/lib/ReactTestUtils';
import {Footer} from './footer';

describe('footer component', () => {
  it('should render the copyright of the app', () => {
    const footer = TestUtils.renderIntoDocument(<Footer/>);
    const paragraph = TestUtils.findRenderedDOMComponentWithTag(footer, 'p');
    expect(paragraph.textContent).toEqual('2016 - 2017 RZ is a software product made with love from Peru.');
  });
});
