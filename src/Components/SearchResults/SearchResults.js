import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

function SearchResults(trackResults) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={trackResults}/>
    </div>
  );
}

export default SearchResults;
