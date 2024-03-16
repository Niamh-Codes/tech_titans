import React from "react";  
import AnswerCard from "./AnswerCard";
import QuizCards from "./QuizCards";

 function Quiz() {
    return (
        <>

            <div style={{ backgroundColor: '#1B1914', color: '#FFB53A' }}
  className="block rounded-lg shadow-secondary-1 dark:bg-surface-dark">
  <a href="#!">
  </a>
    <h1 className="relative flex w-full">Quizio</h1>
  <div className="p-6 text-surface dark:text-white">
    <h2 className="mb-2 text-xl font-medium leading-tight flex justify-center relative flex w-full">Question here</h2>
  </div>
</div>
<div style={{ backgroundColor: '#1B1914'}}className="answer-section flex justify-center space-x-5 relative flex w-full">
      <QuizCards />
      <QuizCards />
      <QuizCards />
      <QuizCards />
    </div>
        </>
    );
}

export default Quiz;