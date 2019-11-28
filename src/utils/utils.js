const buildQueryString = ( queryObject ) => {
  if (!queryObject) return '';
  let queryString = '';
  const queryKeys = Object.keys(queryObject);
  queryKeys.forEach(queryKey => {
    if (queryString === '') {
      queryString = `?${queryKey}=${queryObject[queryKey]}`;
    } else {
      queryString += `&${queryKey}=${queryObject[queryKey]}`;
    }
  })
  return queryString;
}

module.exports = { buildQueryString }