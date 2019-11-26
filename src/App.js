import React from 'react';
import { Router } from '@reach/router'

import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Router>
        <SearchResults />
        <SingleItem />
      </Router>
    </div>
  );
}

export default App;
