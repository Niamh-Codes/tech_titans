import React from "react";  
import AnswerCard from "./AnswerCard";

 function Quiz() {
    return (
        <>

            <div
  className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
  <a href="#!">
  </a>
    <h1>Quizio</h1>
  <div className="p-6 text-surface dark:text-white">
    <h5 className="mb-2 text-xl font-medium leading-tight">Question here</h5>
  </div>
</div>
<div className="answer-section flex justify-center space-x-5 ">
      <AnswerCard />
      <AnswerCard />
      <AnswerCard />
    </div>
        </>
    );
}

export default Quiz;