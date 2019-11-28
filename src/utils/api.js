import axios from 'axios';
import { buildQueryString } from './utils';
const request = axios.create({ baseURL: 'https://itunes.apple.com/search' });


export const searchByTerm = ( queryObject ) => {

  let queryString = buildQueryString(queryObject);

  return request.get(queryString)
    .then(({ data }) => {
      return data;
    })
}

/*
  https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#overview

  itunes api does not provide a page number query but there is an offset query.
  However, in order to know how many results there are to offset you need to query the data first so this
  is kind of redundant!  For this project I shall limit results to the default of 50 and paginate
  accordingly

  queries available...
    term - any value
    country - two letter country code - see search-criteria.js for country code object - default ??
    media - see search-criteria.js for mediaTypes - default 'all'
    entity - see search-criteria.js for entityTypes - default 'all'
    attribute - see link below... (won't be available in this app for brevity)
    limit - no. of results you want back (max 200) - default 50 (max 200)
    lang - default 'en-us'
    explicit - yes/no - restricts results with explicit content - default 'no'

  Results returned :-

    there are 3 wrapper types...
      track, 
      collection, 
      artist

  'track' type ...
  { "wrapperType":"track",
    "kind":"song",  values - book, album, coached-audio, feature-movie, interactive-booklet, music-video, pdf podcast, podcast-episode, software-package, song, tv-episode, artist
    "artistId":909253,
    "collectionId":120954021,
    "trackId":120954025,
    "artistName":"Jack Johnson",
    "collectionName":"Sing-a-Longs and Lullabies for the Film Curious George",
    "trackName":"Upside Down",
    "collectionCensoredName":"Sing-a-Longs and Lullabies for the Film Curious George",
    "trackCensoredName":"Upside Down",
    "artistViewUrl":"https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewArtist?id=909253",
    "collectionViewUrl":"https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?i=120954025&id=120954021&s=143441",
    "trackViewUrl":"https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?i=120954025&id=120954021&s=143441",
    "previewUrl":"http://a1099.itunes.apple.com/r10/Music/f9/54/43/mzi.gqvqlvcq.aac.p.m4p",
    "artworkUrl60":"http://a1.itunes.apple.com/r10/Music/3b/6a/33/mzi.qzdqwsel.60x60-50.jpg",
    "artworkUrl100":"http://a1.itunes.apple.com/r10/Music/3b/6a/33/mzi.qzdqwsel.100x100-75.jpg",
    "collectionPrice":10.99,
    "trackPrice":0.99,
    "collectionExplicitness":"notExplicit",
    "trackExplicitness":"notExplicit",
    "discCount":1,
    "discNumber":1,
    "trackCount":14,
    "trackNumber":1,
    "trackTimeMillis":210743,
    "country":"USA",
    "currency":"USD",
    "primaryGenreName":"Rock"
  }

  'artist' type ...
  {
    "wrapperType": "artist",
    "artistType": "Artist",
    "artistName": "Maroon 5",
    "artistLinkUrl": "https://music.apple.com/us/artist/maroon-5/1798556?uo=4",
    "artistId": 1798556,
    "amgArtistId": 529962,
    "primaryGenreName": "Pop",
    "primaryGenreId": 14
  }

  'collection' type...
  {
    "amgArtistId": 4882,
    "artistId": 60358,
    "artistName": "Meat Loaf"
    "artistViewUrl": "https://music.apple.com/us/artist/meat-loaf/60358?uo=4",
    "artworkUrl60": "https://is5-ssl.mzstatic.com/image/thumb/Music7/v4/60/5d/a5/605da572-b0f5-c3fb-aead-125af187635a/source/60x60bb.jpg",
    "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music7/v4/60/5d/a5/605da572-b0f5-c3fb-aead-125af187635a/source/100x100bb.jpg",
    "collectionCensoredName": "Bat Out of Hell",
    "collectionExplicitness": "notExplicit",
    "collectionId": 991385383,
    "collectionName": "Bat Out of Hell",
    "collectionPrice": 6.99,
    "collectionType": "Album",
    "collectionViewUrl": "https://music.apple.com/us/album/bat-out-of-hell/991385383?uo=4",
    "copyright": "℗ 1977, 2012 Sony Music Entertainment",
    "country": "USA",
    "currency": "USD",
    "primaryGenreName": "Rock",
    "releaseDate": "2015-03-25T07:00:00Z",
    "trackCount": 7,
    "wrapperType": "collection"
  }

*/