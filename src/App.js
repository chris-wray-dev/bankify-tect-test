import React, { Component } from 'react';
import { Router } from '@reach/router'

import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import SingleItem from './Components/SingleItem'
import SideBar from './Components/SideBar';

class App extends Component {

  state = {
    data: null
  }

  fetchResults = (data) => {
    this.setState({ data })
  }

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <Header />
        <SearchBar fetchResults={this.fetchResults}/>
        <div className="app-body">

          <div className="sidebar">
            <SideBar />
          </div>
          
          <div className="app-main">
            <Router>
              <SearchResults path="/" data={data}/>
              <SearchResults path="/results" data={data}/>
              <SingleItem path="/item/:item_id" />
            </Router>
          </div>
        </div>
        
      </div>
    );
  }   
}

export default App;
