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

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get("https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple&encode=url3986");
      const decodedQuestions = response.data.results.map(question => {
        const incorrect_answers = question.incorrect_answers.map(answer => decodeURIComponent(answer));
        const correct_answer = decodeURIComponent(question.correct_answer);
        const answers = [...incorrect_answers, correct_answer];
        // Shuffle the answers
        for (let i = answers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [answers[i], answers[j]] = [answers[j], answers[i]];
        }
        return {
          ...question,
          question: decodeURIComponent(question.question),
          correct_answer,
          incorrect_answers: answers,
        };
      });
      setQuestions(decodedQuestions);
    };
    fetchQuestions();
  }, []);
  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
      setShowAnswer(false);
    } else {
      setShowAnswer(true);
    }
    setShowNext(true);
  };
  const nextQuestion = () => {
    const nextQuestionIndex = currentQuestion + 1;
    setCurrentQuestion(nextQuestionIndex);
    setShowNext(false);
    setShowAnswer(false);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('highScore', score);
    }
  };

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


