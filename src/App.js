import React from 'react';
import { Router } from '@reach/router'

import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import SingleItem from './Components/SingleItem'
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <div className="app-body">

        <div className="sidebar">
          <SideBar />
        </div>
        
        <div className="app-main">
          <Router>
            <SearchResults path="/" />
            <SearchResults path="/results" />
            <SingleItem path="/item/:item_id" />
          </Router>
        </div>
      </div>
      
    </div>
  );
}

export default App;
