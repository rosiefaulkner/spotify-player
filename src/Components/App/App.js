import React, { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App(props) {
  const [searchResults, setSearchResults] = useState([
    {
      name: "rosie girl",
      artist: "rosie artist",
      album: "rosie album",
      id: "1",
    },
    {
      name: "name person",
      artist: "name artist",
      album: "name album",
      id: "6",
    },
    {
      name: "fatoosh",
      artist: "fatoosh artist",
      album: "fatoosh album",
      id: "9",
    },
  ]);
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        {/* Add a SearchBar component */}
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          {/* Add a Playlist component */}
        </div>
      </div>
    </div>
  );
}

export default App;
