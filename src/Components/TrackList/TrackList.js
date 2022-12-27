import React, { useRef } from "react";
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(tracks) {
  console.log("tracks tracks.tracks.searchResults", tracks.tracks.searchResults[0].artist);
  //const test = tracks.tracks.searchResults.test.rosie;
  //const test = tracks["tracks"]["searchResults"]["test"];
  //console.log("tracks.tracks.searchResults.test", tracks.tracks.searchResults.test);
  return (
    //<Track track={tracks.tracks.searchResults} />
    <div className="TrackList">
        <Track track={(tracks.tracks.searchResults[0])} />
        {/* {(tracks.tracks.searchResults).map((track) => {
            <div>
                <Track track={track} />
            </div>
        })} */}
    </div>
  );
}

export default TrackList;
