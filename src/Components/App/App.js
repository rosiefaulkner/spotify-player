import React, { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

function App({}) {
  const [isRemoval, setIsRemoval] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("Summer Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
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

  // Rename playlist 
  const updatePlaylistName = (newName) => {
    setPlaylistName(newName);
  }

  // Save user playlist
  const savePlaylist = () => {
    const trackURIs = playlistTracks;
    Spotify.savePlaylist();
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={Spotify.search} />
        <div className="App-playlist">
          {console.log(searchResults)}
          <SearchResults searchResults={searchResults} onAdd={addTrack} isRemoval={isRemoval} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;
