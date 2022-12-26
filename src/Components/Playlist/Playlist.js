import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist() {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
      {/* Add a TrackList component */}
    </div>
  );
}

export default Playlist;
