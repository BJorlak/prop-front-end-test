import React from "react";
import "./Pages.css";

export default function Pages({ goToNextPage, goToPreviousPage }) {
  return (
    <div>
      {goToPreviousPage && (
        <button className="change-page" onClick={goToPreviousPage}>
          Previous page
        </button>
      )}
      {goToNextPage && (
        <button className="change-page" onClick={goToNextPage}>
          Next Page
        </button>
      )}
    </div>
  );
}
