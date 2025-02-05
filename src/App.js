import React from "react";
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to Jammming!</h1>
        <SearchBar/>
        <SearchResults/>
        <Playlist/>
        
      </header>
    </div>
  );
}

export default App;
