import React, { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App({ artist, album, id }) {
  const test = [{artist:"Rosie artist", album:"Rosie Best Album", id:"1"}, {artist:"Kareem", album:"Kareem's Dream Album", id:"2"}];
  const [isRemoval, setIsRemoval] = useState(false);
  const [searchResults, setSearchResults] = useState(test);
  const [playlistName, setPlaylistName] = useState("Summer Playlist");
  const [playlistTracks, setPlaylistTracks] = useState(test);
  // Add track to playlist
  const addTrack = (track) => {
    const trackId = track.id;
    const allTracks = playlistTracks;
    const songExistsInPlaylist = allTracks.some(el => el.id === trackId);
    if (!songExistsInPlaylist) allTracks.push({track});
    setPlaylistTracks(allTracks);
  }
  // Remove track from playlist
  const removeTrack = (track) => {
    const allTracks = playlistTracks;
    const indexOfTrack = allTracks.indexOf(track);
    if (indexOfTrack > -1) { // only splice array when item is found
      allTracks.splice(indexOfTrack, 1); // 2nd parameter means remove one item only
    }
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
          <SearchResults searchResults={searchResults} onAdd={addTrack} isRemoval={isRemoval} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
        </div>
      </div>
    </div>
  );
}

export default App;
