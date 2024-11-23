import React from "react";

const Options = ({ question }) => {
  console.log(question);
  
  return (
    <div className="options">
      {question.options.map((option) => {
        return (<button key={option} className="btn btn-option">{option}</button>);
      })}
    </div>
  );
};

export default Options;
