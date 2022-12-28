import React, { useRef } from "react";
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(tracks, onAdd, isRemoval) {
  return (
    <div className="TrackList">
        {/* <Track track={(tracks.tracks.searchResults[0])} /> */}
        {tracks?.tracks?.searchResults?.map((track) => {
            return <Track key={track.id} track={track} />
        })}
    </div>
  );
}

export default TrackList;
