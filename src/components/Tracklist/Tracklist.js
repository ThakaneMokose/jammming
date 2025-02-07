import React from 'react';
import Track from '../Track/Track';

export default function Tracklist ({tracks, isPlaylist, addTrack, removeTrack}){
    return (
        <div>
            {tracks.map(track=>{
                return(
                    <Track
                        isPlaylist={isPlaylist}
                        removeTrack={removeTrack} 
                        addTrack={addTrack} 
                        key={track.id} 
                        track={track} 
                    />
                )
            })}
        </div>
    );
}