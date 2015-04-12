import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import DivMega from '../src/DivMega';

describe('DivMega', function () {
  it('Should render', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <DivMega />
    );

    assert.ok(instance);
  });
});
