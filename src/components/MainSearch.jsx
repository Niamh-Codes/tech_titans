import React from "react";
import AnswerCard from "./AnswerCard";
import GetTranslation from "./GetTranslation";

function MainSearch() {
  return (
    <>
      <nav
        style={{ backgroundColor: '#1B1914', color: '#FFB53A' }}
        id="search-div"
        className="flex items-center justify-between py-2 lg:py-4 bg-gray-700 shadow-md"
      >
        {/* Your navigation bar code */}
      </nav>

      <GetTranslation />

      <div id="helloContainer" className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
          <div className="mx-auto">
            <div className="answer-section flex justify-center space-x-5">
              <AnswerCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSearch;