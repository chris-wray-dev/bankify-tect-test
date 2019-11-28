const buildQueryString = ( queryObject ) => {
  if (!queryObject) return '';
  let queryString = '';
  const queryKeys = Object.keys(queryObject);
  queryKeys.forEach(queryKey => {
    if (queryString === '' && queryObject[queryKey]) {
      queryString = `?${queryKey}=${queryObject[queryKey]}`;
    } else if (queryObject[queryKey]) {
      queryString += `&${queryKey}=${queryObject[queryKey]}`;
    }
  })
  return queryString;
}

module.exports = { buildQueryString }