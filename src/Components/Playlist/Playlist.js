import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist({playlistName, playlistTracks}) {
  return (
    <div className="Playlist">
      <input defaultValue={playlistName} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
      <TrackList tracks={playlistTracks} />
    </div>
  );
}

export default Playlist;
