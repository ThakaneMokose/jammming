import React from 'react';

export default function Track({removeTrack, addTrack, track, isPlaylist}){

    const button=()=>{
        if(isPlaylist){
            return(
                <button onClick={()=>removeTrack(track)} >-</button>
            )
        }else{
            return(
                <button onClick={()=>addTrack(track)} >+</button>
            )
        }
    }
    return (
        <div>
            
            <h3>{track.name}</h3>
            <p> artist: {track.artist}</p>
            <p>album: {track.album}</p>
            {button()}
        </div>
    );
}
