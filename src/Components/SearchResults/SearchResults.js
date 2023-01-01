import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

function SearchResults(trackResults = [{}], onAdd = () => {}, isRemoval = false) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={trackResults} onAdd={onAdd} isRemoval={isRemoval} />
    </div>
  );
}

export default SearchResults;
