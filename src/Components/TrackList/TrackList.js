import React, { useRef } from "react";
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(tracks) {
  console.log("tracks", tracks);
  //const test = tracks.tracks.searchResults.test.rosie;
  //const test = tracks["tracks"]["searchResults"]["test"];
  //console.log("tracks.tracks.searchResults.test", tracks.tracks.searchResults.test);
  return (
    <div className="TrackList">
        {(Object.keys(tracks)).map((track) => {
            <Track track={track} />
        })}
    </div>
  );
}

export default TrackList;
