import React,{useState} from "react";
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {

  const [playlistName, setPlaylistName] = useState("Gym");
  const [playlistTracks, setPlaylistTracks] = useState([
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
  const [results, setResults] = useState([
    {
      name:"Cold Showers",
      artist:"Tia Gordon",
      album:"Place Holder",
      id:2
    },
    {
      name:"Hymn for the Weekend",
      artist:"Coldplay",
      album:"A Head Full Of Dreams",
      id:3
    },
    {
      name:"So Cold",
      artist:"Balu Brigada",
      album:"Balu",
      id:1
    }
  ]);
  const handleChange=(e)=>{
    setPlaylistName(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to Jammming!</h1>
        <SearchBar/>
        <SearchResults results={results}/>
        <Playlist onNameChange={handleChange} playlistName={playlistName} playlistTracks={playlistTracks} />
        
      </header>
    </div>
  );
}

export default App;
/*<Playlist/>*/ //put under SearchResults component