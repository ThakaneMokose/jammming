import React from 'react';
import Track from '../Track/Track';

export default function Tracklist ({tracks, addTrack}){
    return (
        <div>
            {tracks.map(track=>{
                return(
                    <Track addTrack={addTrack} key={track.id} track={track} />
                )
            })}
        </div>
    );
}