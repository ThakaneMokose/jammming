import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

export default function Playlist (){
    return (
        <div>
            <h2>My playlist</h2>
            <Tracklist/>
            <button>Save to Spotify</button>
        </div>
    )
}
