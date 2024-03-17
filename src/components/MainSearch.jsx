import React from "react";
import AnswerCard from "./AnswerCard";
import GetTranslation from "./GetTranslation";

function MainSearch() {
  return (
    <>
      <div className="container mx-auto vh-100">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 justify-center">
      <GetTranslation />
            <div className="answer-section flex justify-center space-x-5">
              {/* <AnswerCard /> */}
            </div>
        </div>
      </div>
    </>
  );
}

export default MainSearch;