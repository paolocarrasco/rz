/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react-dom/lib/ReactTestUtils';
import {Landing} from './landing';

describe('landing component', () => {
  it('should render a search box', () => {
    const landing = TestUtils.renderIntoDocument(<Landing/>);
    expect(landing).not.toBeUndefined();
  });
});
