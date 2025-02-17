import React,{useState} from "react";

export default function SearchBar (props){
    const [term, setTerm]=useState("");

    const handleChange=(e)=>{
        setTerm(e.target.value);
    };
    const search=()=>{
        props.onSearch(term);
    }
    return (
        <div>
            <input type="text" onChange={handleChange} placeholder="Enter song, artist or album"/>
            <button onClick={search} >Search</button>
        </div>
    )
}