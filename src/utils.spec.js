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
  it('returns a query string starting with ? followed by the first query then & followed by the second query when passed a two query object', () => {
    const actual = buildQueryString({ 
      term: 'Harry Potter',
      media: 'ebook' });
    const expected = '?term=Harry Potter&media=ebook';
    expect(actual).to.equal(expected);
  });
  it('returns a query string starting with ? followed by the first query then & followed by the query for all other queries when passed a multiple query object', () => {
    const actual = buildQueryString({ 
      term: 'Harry Potter',
      media: 'ebook',
      limit: 20,
    });
    const expected = '?term=Harry Potter&media=ebook&limit=20';
    expect(actual).to.equal(expected);
  });
});