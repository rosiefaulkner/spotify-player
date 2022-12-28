import React, { useState } from "react";
import "./Track.css";

function Track({track, onAdd}) {
  const addTrack = () => {
    onAdd(track);
  }
  const renderAction = () => {
    return <button className="TrackAction">{isRemoval ? "-" : "+"}</button>;
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
        <button onClick={addTrack} className="Track-action">{renderAction}</button>
      </>
    </div>
  );
}

export default Track;
