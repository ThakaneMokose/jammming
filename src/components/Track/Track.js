import React from 'react';

export default function Track({addTrack, track}){
    return (
        <div>
            
            <h3>{track.name}</h3>
            <p> artist: {track.artist}</p>
            <p>album: {track.album}</p>
            <button onClick={()=>addTrack(track)} >+</button>
        </div>
    );
}
/*<h3>{props.track.name}</h3>
            <p>
                artist: {props.track.artist}
                album: {props.track.album}
            </p>*/