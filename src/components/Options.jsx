import React from "react";

const Options = ({ question, answer, dispatch }) => {
  console.log(question);
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <button disabled={hasAnswered} onClick={() => dispatch({ type: 'NEW_ANSWER', payload: index })} key={option} className={`btn btn-option ${index === answer ? 'answer' : ''} ${hasAnswered ? index === question.correctOption ? 'correct' : 'wrong' : ""} `}>{option}</button>
        );
      })}
    </div>
  );
};

export default Options;
