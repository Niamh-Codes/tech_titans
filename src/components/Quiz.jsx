import React from "react";  
import AnswerCard from "./AnswerCard";

 function Quiz() {
    return (
        <>

            <div style={{ backgroundColor: '#1B1914'}}
  className="block rounded-lg shadow-secondary-1 dark:bg-surface-dark">
  <a href="#!">
  </a>
    <h1>Quizio</h1>
  <div className="p-6 text-surface dark:text-white">
    <h5 className="mb-2 text-xl font-medium leading-tight">Question here</h5>
  </div>
</div>
<div style={{ backgroundColor: '#1B1914'}}className="answer-section flex justify-center space-x-5">
      <AnswerCard />
      <AnswerCard />
      <AnswerCard />
      <AnswerCard />
    </div>
        </>
    );
}

export default Quiz;