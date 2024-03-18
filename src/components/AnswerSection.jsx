import React from "react";
import AnswerCard from "./AnswerCard";

function AnswerSection() {
  return (
    <>
    <div className="answer-section flex">
      <AnswerCard />
      <AnswerCard />
      <AnswerCard />
    </div>
    </>
  );
}

export default AnswerSection;
