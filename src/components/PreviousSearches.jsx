import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// PreviousSearches component definition
export default function PreviousSearches() {
  // Array of previous search terms
  const searches = ['pizza', 'spaghetti', 'pork chops', 'casserole', 'swedish pancakes', 'strawberry cheesecake'];

  return (
    <div className="previous-searches section">
      <h2>Previous Searches</h2>
      {/* Container for previous search items */}
      <div className="previous-searches-container">
      {/* Iterate through search terms and display search items */}
        {searches.map((search, index) => (
          <div key={index} style={{ animationDelay: index * 0.1 + "s" }} className="search-item">
            {search}
          </div>
        ))}
      </div>
      {/* Search box */}
      <div className="search-box">
        {/* Input field for search */}
        <input type="text" placeholder="Search for a recipe..." />
        {/* Button to initiate search */}
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}






