import React from 'react';
import { Router } from '@reach/router'

import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import SingleItem from './Components/SingleItem'

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Router>
        <SearchResults path="/results"/>
        <SingleItem path="item/:item_id"/>
      </Router>
    </div>
  );
}

export default App;
