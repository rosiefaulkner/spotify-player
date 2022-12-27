import React, { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App({ props, artist, album, id }) {
  const test = {
    rosie: [(artist = "rosie artist"), (album = "rosie album"), (id = "1")],
    testName: [(artist = "name artist"), (album = "name album"), (id = "6")],
    fatoosh: [
      (artist = "fatoosh artist"),
      (album = "fatoosh album"),
      (id = "9"),
    ],
  };
  const [searchResults, setSearchResults] = useState({ test });
  console.log("props", props);
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
