import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

export default function Playlist (props){
    const handleChange=(e)=>{
        props.onNameChange(e.target.value);
    }
    return (  
        <div>
            <input style={{color: "black"}} type='text' onChange={props.onNameChange} placeholder={props.playlistName} />
            <Tracklist 
                removeTrack={props.removeTrack} 
                tracks={props.playlistTracks}
                isPlaylist={true} 
            />
            <button onClick={props.savePlaylist}>Save to Spotify</button>
        </div>
    )
}
