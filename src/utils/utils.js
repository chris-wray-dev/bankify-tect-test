const buildQueryString = ( queryObject ) => {
  if (!queryObject) return '';
  let queryString = '';
  const queryKeys = Object.keys(queryObject);
  queryKeys.forEach(queryKey => {
    queryString = `?${queryKey}=${queryObject[queryKey]}`
  })
  return queryString;
}

module.exports = { buildQueryString }