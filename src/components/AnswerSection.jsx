import React from "react";
import AnswerCard from "./AnswerCard";

function AnswerSection() {
  return (
    <>
    <div className="answer-section flex justify-center space-x-5 ">
      <AnswerCard />
      <AnswerCard />
      <AnswerCard />
    </div>
    </>
  );
}

export default AnswerSection;
