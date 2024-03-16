import React from "react";
import "./MainSearch.css";
import AnswerCard from "./AnswerCard";
import DisplayTranslation from "./DisplayTranslation"; // Correct import statement

function MainSearch() {
  return (
    <>
      <nav
        style={{ backgroundColor: '#1B1914', color: '#FFB53A' }}
        id="search-div"
        className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4"
      >
        {/* Your navigation bar code */}
      </nav>
      
      <DisplayTranslation /> {/* Correct usage of the component name */}
      
      <div id="helloContainer" className="row"></div> {/* Correct class attribute */}
      
      <div className="answer-section flex justify-center space-x-5 relative flex w-full">
        <AnswerCard />
      </div>
    </>
  );
}

export default MainSearch;