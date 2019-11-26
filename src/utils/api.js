import axios from 'axios';
const request = axios.create({ baseURL: 'https://itunes.apple.com/search' });

export const searchByTerm = ( { term, country, media, entity, limit } ) => {
  const queries = [];

  if (term) queries.push(`term=${term}`);
  if (country) queries.push(`country=${country}`);
  if (media) queries.push(`media=${media}`);
  if (entity) queries.push(`entity=${entity}`);
  if (limit) queries.push(`limit=${limit}`);

  let queryString = '';

  queries.forEach(query => {
    if (queryString === '') queryString = `?${query}`;
    else queryString += `&${query}`;
  });

  return request.get(queryString)
    .then(({ data }) => {
      console.log(data);
    })
}

/*
  itunes api does not provide a page number query but there is an offset query.
  However, in order to know how many results there are to offset you need to query the data first so this
  is kind of redundant!  For this project I shall limit results to the default of 50 and paginate
  accordingly

  queries available...
    term - any value
    country - two letter country code - see search-criteria.js for country code object
    media - see search-criteria.js for mediaTypes
    entity - see search-criteria.js for entityTypes
    attribute - see link below... (won't be available in this app for brevity)
    limit - no. of results you want back (max 200)
    lang - defaults to en-us
    explicit - yes/no - restricts results with explicit content (defaults to no)

  https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#overview
*/