import React,{useState} from "react";
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Spotify from "./components/spotify";

function App() {

  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([])
  const [results, setResults] = useState([]);

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
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  };
  console.log("Acces Token:", Spotify.getAccessToken());

  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to Jammming!</h1>
        <SearchBar onSearch={onSearch} />
        <SearchResults 
          addTrack={addTrack} 
          results={results}
        />
        <Playlist 
          savePlaylist={savePlaylist} 
          removeTrack={removeTrack} 
          onNameChange={handleChange} 
          playlistName={playlistName} 
          playlistTracks={playlistTracks} />
        
      </header>
    </div>
  );
};

export default App;
