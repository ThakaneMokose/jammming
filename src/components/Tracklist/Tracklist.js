import React from 'react';
import Track from '../Track/Track';

export default function Tracklist ({tracks}){
    return (
        <div>
            {tracks.map(track=>{
                return(
                    <Track key={track.id} track={track} />
                )
            })}
        </div>
    );
}