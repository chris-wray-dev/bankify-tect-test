import React, { Component } from 'react';
import * as api from '../utils/api';
import * as searchCriteria from '../utils/search-criteria';

import './Styles/SearchBar.css'

class SearchBar extends Component {
  state = {
    queryObject: { 
      term: '',
      attribute: null,
      country: 'GB', 
      media: null, 
      entity: null, 
      limit: 50
    }
  }

  handleChange = (event) => {
    const queryKey = event.target.id;
    let queryValue = event.target.value;
    if (queryValue === '') queryValue = null;
    this.setState(currentState => {
      const newState = currentState;
      newState.queryObject[queryKey] = queryValue;
      return newState;
    });
  }

  handleSubmit = (event) => {
    const { fetchResults } = this.props;
    event.preventDefault();
    api.searchByTerm(this.state.queryObject)
      .then(data => {
        fetchResults(data);
      })
      .catch(err => {
        console.log(err)
      });
  }

  render() {
    return (
      <div className="app-search-bar">
        <h4>Search Parameters</h4>
        <form onSubmit={ this.handleSubmit }>
          <input id="term" type="text" onChange={ this.handleChange }/>
          <button type="submit"></button>

          <select id="media" onChange={ this.handleChange }>
            <option value="">-- media type --</option>
            { searchCriteria.mediaTypes.map(type => {
              return (
              <option value={type} key={type}>{type}</option>
              )
            })}
          </select>

          { this.state.queryObject.media && 
            <select id="entity" onChange={ this.handleChange }>
              <option value={null}>-- entity --</option>
              { searchCriteria.entityTypes[this.state.queryObject.media].map(entity => {
                return (
                <option value={entity} key={entity}>{entity}</option>
                )
              })}
            </select>
          }

          { this.state.queryObject.media && 
            <select id="attribute" onChange={ this.handleChange }>
              <option value={null}>-- attribute --</option>
              { searchCriteria.attributes[this.state.queryObject.media].map(attribute => {
                return (
                <option value={attribute} key={attribute}>{attribute}</option>
                )
              })}
            </select>
          }
          
        </form>
      </div>
    );
  }
}

export default SearchBar;