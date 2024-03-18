import React,{useState, useEffect} from "react";
import axios from "axios";
import QuizCards from "./QuizCards";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore') || 0);
  const [showNext, setShowNext] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <div style={{ backgroundColor: '#1B1914', color: '#FFB53A' }} className="bg-gray-900 text-yellow-500 block rounded-lg dark:bg-surface-dark p-4">
        <a href="#!"></a>
        <h1 className="text-3xl lg:text-5xl font-bold text-center">Quizio</h1>
        <div className="p-6 text-surface dark:text-white">
          <h2 className="mb-4 text-xl lg:text-2xl font-medium leading-tight text-center">Question here</h2>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
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


