import React from "react";
import "./Track.css";

function Track({track}, onAdd = () => {}, onRemove = () => {}, isRemoval = false) {
  // Remove track from playlist
  const addTrack = (track) => {
    onAdd(track);
  }
  // Remove track from playlist
  const removeTrack = (track) => {
    onRemove(track)
  }

  const renderAction = () => {
    return isRemoval ? "-" : "+";
  };

  return (
    <div className="Track">
      <>
        <div className="Track-information">
          <h3>{track.artist}</h3>
          <p>
            {track.artist} | {track.album}
          </p>
        </div>
        <button onClick={isRemoval ? removeTrack : addTrack} className="Track-action">{renderAction()}</button>
      </>
    </div>
  );
}

export default Track;
