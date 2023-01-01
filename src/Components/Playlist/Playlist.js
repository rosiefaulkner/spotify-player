import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist({playlistName = "", playlistTracks}, onRemove = () => {}, onNameChange = () => {}, onSave = () => {}) {
  const handleNameChange = (e) => {
    onNameChange(e);
  }
  return (
    <div className="Playlist">
      <input defaultValue={playlistName} onChange={inputValue => {handleNameChange(inputValue)}} />
      <button className="Playlist-save" onClick={() => {onSave()}}>SAVE TO SPOTIFY</button>
      <TrackList tracks={playlistTracks} onRemove={onRemove} />
    </div>
  );
}

export default Playlist;
