import React, { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App({ artist, album, id }) {
  const test = [{artist:"Rosie artist", album:"Rosie Best Album", id:"1"}, {artist:"Kareem", album:"Kareem's Dream Album", id:"2"}];
  const [searchResults, setSearchResults] = useState(test);
  const [playlistName, setPlaylistName] = useState("Summer Playlist");
  const [playlistTracks, setPlaylistTracks] = useState(test);

  const addTrack = (track) => {
    const trackId = track.id;
    const allTracks = playlistTracks;
    const songExistsInPlaylist = allTracks.some(el => el.id === trackId);
    if (!songExistsInPlaylist) allTracks.push({track});
    setPlaylistTracks(allTracks);
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
        </div>
      </div>
    </div>
  );
}

export default App;
