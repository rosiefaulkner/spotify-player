import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

function SearchResults(trackResults, addTrack, isRemoval) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={trackResults} onAdd={addTrack} isRemoval={isRemoval} />
    </div>
  );
}

export default SearchResults;
