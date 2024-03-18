import React, { useState } from "react";

function QuizCards({ onClick, answer }) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    onClick();
    setSelected(true);
  };

  const resetColor = () => {
    setSelected(false);
  };

  return (
    <>
    <button
        type="button"
        onClick={handleClick}
        onBlur={resetColor}
        className={`inline-block rounded px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ${selected ? 'text-blue-500 bg-primary' : 'text-white bg-primary'}`}
    >
        {answer}
    </button>
    </>
);
}

export default QuizCards;
