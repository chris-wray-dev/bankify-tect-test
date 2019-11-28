const { expect } = require('chai');

const { buildQueryString } = require('./utils/utils');

describe('', () => {
  it('returns a string when passed an object', () => {
    const actual = buildQueryString({});
    const expected = '';
    expect(actual).to.equal(expected);
  })
});