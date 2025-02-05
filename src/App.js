import React,{useState} from "react";
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {

  const [results, setResults] = useState([
    {
      name: 'Cold Shoulder',
      artist: 'Someone',
      album: 'Days',
      id: 1
    },
    {
      name: 'TORE UP',
      artist: 'Don Toliver',
      album: 'HARDSTONE PSYCHO',
      id: 2
    },
    {
      name: 'Strangest Of Ways',
      artist: 'Lucy Rose',
      album: "Somenthing's Changing",
      id: 3
    }
  ])

  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to Jammming!</h1>
        <SearchBar/>
        <SearchResults results={results}/>
        
        
      </header>
    </div>
  );
}

export default App;
/*<Playlist/>*/ //put under SearchResults component