import React, { Component } from 'react';

import './Styles/SearchResults.css'

class SearchResults extends Component {

  state = {
    results: [],
    resultCount: 0
  }

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      const { results, resultCount } = this.props.data;
      this.setState({ 
        results,
        resultCount
      });
    } 
  }

  render() {
    const { results, resultCount } = this.state;
    return (
      <div className="app-search-results">
        <h4>Search results</h4>
        <p>{resultCount}</p>
        { results.map(result => {
            return (
              <div key={result.trackId}> 
                <p>{ result.trackName }</p>
                <img src={result.artworkUrl100} alt={result.trackName}></img>
              </div>
            )
        })}
      </div>
      
    )
  }
}

export default SearchResults;