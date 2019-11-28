const { expect } = require('chai');

const { buildQueryString } = require('./utils/utils');

describe('', () => {
  it('returns a string when passed nothing', () => {
    const actual = buildQueryString();
    const expected = '';
    expect(actual).to.equal(expected);
  });
  it('returns a string when passed an object', () => {
    const actual = buildQueryString({});
    const expected = '';
    expect(actual).to.equal(expected);
  });
  it('returns a query string starting with ? when passed an object with one query', () => {
    const actual = buildQueryString({ term: 'Harry Potter' });
    const expected = '?term=Harry Potter';
    expect(actual).to.equal(expected);
  });
});