import React, { useRef } from "react";
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(tracks = [{}], onAdd = () => {}, onRemove = () => {}, isRemoval = false) {
  return (
    <div className="TrackList">
        {tracks?.tracks?.searchResults?.map((track) => {
            return <Track key={track.id} track={track} onAdd={onAdd} onRemove={onRemove} isRemoval={true} />
        })}
    </div>
  );
}

export default TrackList;
