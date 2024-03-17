import React from "react";
import AnswerCard from "./AnswerCard";
import QuizCards from "./QuizCards";

function Quiz() {
  return (
    <>
      <div className="text-customOrange bg-body block rounded-lg dark:bg-surface-dark p-4">
        <a href="#!"></a>
        <h1 className="text-3xl lg:text-5xl font-bold text-center">Quizio</h1>
        <div className="p-6 text-surface dark:text-white">
          <h2 className="mb-4 text-xl lg:text-2xl font-medium leading-tight text-center">Question here</h2>
        </div>
      </div>

      <div className="text-customOrange bg-body container mx-auto mt-4">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          <QuizCards />
          <QuizCards />
          <QuizCards />
          <QuizCards />
        </div>
      </div>
    </>
  );
}

export default Quiz;