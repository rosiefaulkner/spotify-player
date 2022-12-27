import React, { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App({ artist, album, id }) {
  const test = [{artist:"rosie artist", album:"rosie album", id:"1"}, {artist:"rosie artist", album:"rosie album", id:"1"}];
  const [searchResults, setSearchResults] = useState(test);
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          <Playlist searchResults={searchResults} />
        </div>
      </div>
    </div>
  );
}

export default App;
