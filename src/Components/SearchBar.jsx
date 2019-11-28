import React, { Component } from 'react';
import * as api from '../utils/api';

import './Styles/SearchBar.css'

class SearchBar extends Component {
  state = {
    queryObject: { 
      term: null,
      attribute: null,
      country: 'GB', 
      media: null, 
      entity: null, 
      limit: 50
    },
    results: [],
    resultCount: null
  }

  handleChange = (event) => {
    const queryKey = event.target.id;
    const queryValue = (event.target.value);
    this.setState(currentState => {
      const newState = currentState;
      newState.queryObject[queryKey] = queryValue;
      return newState;
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    api.searchByTerm(this.state.queryObject)
      .then(data => {
        this.setState({
          results: data,
          resultCount: data.resultCount
        })
      });
  }

  render() {
    return (
      <div className="app-search-bar">
        <h4>Search Parameters</h4>
        <form onSubmit={ this.handleSubmit }>
          <input id="term" type="text" onChange={ this.handleChange }/>
          <button type="submit"></button>
        </form>
      </div>
    );
  }
}

export default SearchBar;