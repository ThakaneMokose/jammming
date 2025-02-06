import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

export default function Playlist (props){
    return (
        <div>
            <input type='text' onChange={props.onNameChange}/>
            <h2>{props.playlistName}</h2>
            <Tracklist tracks={props.playlistTracks} />
            <button>Save to Spotify</button>
        </div>
    )
}
