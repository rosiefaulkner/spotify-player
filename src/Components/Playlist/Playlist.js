import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist(tracks) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
      <TrackList tracks={tracks} />
    </div>
  );
}

export default Playlist;
