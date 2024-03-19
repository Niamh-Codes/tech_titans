import React,{useState, useEffect} from "react";
import axios from "axios";
import QuizCards from "./QuizCards";

function Quiz() {
  // State variables
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore') || 0);
  const [showNext, setShowNext] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false); 
  const [quizCategory, setQuizCategory] = useState(22); // Initial category

  // Function to fetch questions from API
  const fetchQuestions = async () => {
    const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=${quizCategory}&difficulty=easy&type=multiple&encode=url3986`);
    const decodedQuestions = response.data.results.map(question => {
      const incorrect_answers = question.incorrect_answers.map(answer => decodeURIComponent(answer));
      const correct_answer = decodeURIComponent(question.correct_answer);
      const answers = [...incorrect_answers, correct_answer];
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

  // UseEffect to fetch questions when quizCategory changes
  useEffect(() => {
    fetchQuestions();
  }, [quizCategory]); 
  
  // Function to handle answer submission
  const handleAnswer = (answer) => {
    if (!answerSubmitted) {
      if (answer === questions[currentQuestion].correct_answer) {
        setScore(score + 1);
        setShowAnswer(false);
      } else {
        setShowAnswer(true);
      }
      setShowNext(true);
      setAnswerSubmitted(true);
    }
  };

  // Function to move to next question
  const nextQuestion = () => {
    const nextQuestionIndex = currentQuestion + 1;
    setCurrentQuestion(nextQuestionIndex);
    setShowNext(false);
    setShowAnswer(false);
    setAnswerSubmitted(false);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('highScore', score);
    }
  };
  
  // Function to restart the game
  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowAnswer(false);
    setShowNext(false);
    setQuizCategory(quizCategory === 22 ? 23 : 22); // Change category when restarting the game
  };

  // Render the Quiz component
  return (
    <>
      {questions.length > 0 ? (
        currentQuestion < questions.length ? (
          <div>
            <div id="quiz" style={{ backgroundColor: '#1B1914', color: '#FFB53A' }} className="bg-gray-900 text-yellow-500 block rounded-lg dark:bg-surface-dark p-4">
              <h1 className="text-3xl lg:text-5xl font-bold text-center">Quizio</h1>
              <div className="p-6 text-surface dark:text-white">
                <h2 className="mb-4 text-xl lg:text-2xl font-medium leading-tight text-center">{questions[currentQuestion].question}</h2>
              </div>
            </div>
    
            <div className="container mx-auto mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
                {questions[currentQuestion].incorrect_answers.map((answer, index) => (
                  <QuizCards key={index} onClick={() => handleAnswer(answer)} answer={answer} disabled={answerSubmitted} />
                ))}
              </div>
            </div>
            {showAnswer && (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h2 className="mb-4 text-xl lg:text-2xl font-medium leading-tight text-center">Correct answer: {questions[currentQuestion].correct_answer}</h2>
              </div>
            )}
            <br/>
            {showNext && (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="quizButton" style={{color: 'white', fontSize:'24px', padding: '2px 8px',}} onClick={nextQuestion}>Next Question</button>

              </div>
            )}
            <div style={{ backgroundColor: '#1B1914', color: '#FFB53A', }} className="bg-gray-900 text-yellow-500 block rounded-lg dark:bg-surface-dark p-4">
              <div style={{ display: 'flex', justifyContent: 'center',gap: '7rem' }}>
                <h2 className="mb-4 text-xl lg:text-2xl font-medium leading-tight text-center">Score: {score}</h2>
                <h2 className="mb-4 text-xl lg:text-2xl font-medium leading-tight text-center">High Score: {highScore}</h2>
                <h2 className="mb-4 text-xl lg:text-2xl font-medium leading-tight text-center">Question: {currentQuestion + 1} / 10</h2>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="mb-4 text-xl lg:text-2xl font-medium leading-tight text-center">Game Over</h2>
            <button className="quizButton" style={{color: 'white'}} onClick={restartGame}>Play Again</button>
          </div>
        )
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Quiz;
