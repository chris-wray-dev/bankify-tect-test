import axios from 'axios';
const request = axios.create({ baseURL: 'https://itunes.apple.com/search' });

export const searchByTerm = ( term ) => {
  return request.get(`?term=${term}`)
    .then(({ data }) => {
      console.log(data);
    })
}