import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

export default function SearchResults (props){
    return (
        <div>
            <h2>Search results:</h2>
            <Tracklist tracks={props.results}/>
        </div>
    )
}