import React,{useState} from "react";
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Spotify from "./components/spotify";

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
      id:4
    },
    {
      name:"Hymn for the Weekend",
      artist:"Coldplay",
      album:"A Head Full Of Dreams",
      id:5
    },
    {
      name:"So Cold",
      artist:"Balu Brigada",
      album:"Balu",
      id:6
    }
  ]);

  const handleChange=(e)=>{
    setPlaylistName(e.target.value)
  };
  const onSearch = (term) => {
    Spotify.search(term).then(setResults)
  };

  const addTrack=(track)=>{
    if(!playlistTracks.some(playlistTrack=> playlistTrack.id === track.id)){
      setPlaylistTracks(prev=>[...prev, track])
    }
  };
  const removeTrack=(track)=>{
    let newList=[];
    playlistTracks.forEach((playlistTrack)=>{
      if(playlistTrack.id !== track.id){
        newList.push(playlistTrack)
      }
    });
    setPlaylistTracks(newList);
  };
  const savePlaylist=()=>{
    const trackURIs=playlistTracks.map(track=>track.uri);
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };
  console.log("Acces Token:", Spotify.getAccessToken());

  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to Jammming!</h1>
        <SearchBar onSearch={onSearch} />
        <SearchResults addTrack={addTrack} results={results}/>
        <Playlist savePlaylist={savePlaylist} removeTrack={removeTrack} onNameChange={handleChange} playlistName={playlistName} playlistTracks={playlistTracks} />
        
      </header>
    </div>
  );
};

export default App;
