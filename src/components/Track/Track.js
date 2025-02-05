import React from 'react';

export default function Track({track}){
    return (
        <div>
            
            <h3>{track.name}</h3>
            <p> artist: {track.artist}</p>
            <p>album: {track.album}</p>
            <button>+</button>
        </div>
    );
}
/*<h3>{props.track.name}</h3>
            <p>
                artist: {props.track.artist}
                album: {props.track.album}
            </p>*/