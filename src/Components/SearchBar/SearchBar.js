import React, { useState } from "react";
import "./SearchBar.css";
import Spotify from "../../util/Spotify";

function SearchBar(onSearch) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleTermChange = (e) => {
        setSearchTerm(e.target.value);
    }
    return (
        <div className="SearchBar">
        <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        {console.log(Spotify)}
        <button onClick={() => {Spotify.search(searchTerm)}} className="SearchButton">SEARCH</button>
        </div>
    );
}

export default SearchBar;
