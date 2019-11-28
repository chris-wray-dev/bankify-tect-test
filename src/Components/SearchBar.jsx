import React, { Component } from 'react';
import * as api from '../utils/api';

import './Styles/SearchBar.css'

class SearchBar extends Component {
  state = {
    searchTerm: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    api.searchByTerm({ 
      term: event.target[0].value
    });
  }

  render() {
    return (
      <div className="app-search-bar">
        <h4>Search Parameters</h4>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" />
          <button type="submit"></button>
        </form>
      </div>
    );
  }
}

export default SearchBar;