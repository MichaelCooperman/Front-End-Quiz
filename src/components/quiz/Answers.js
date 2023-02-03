import React from "react";
import classes from "../../main.module.css";

const Answers = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isIncorrectAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? classes["correct-answer"] : "";
  const incorrectAnswerClass = isIncorrectAnswer ? classes["wrong-answer"] : "";
  const disabledClass = currentAnswer ? classes["disabled-answer"] : "";

  return (
    <div
      className={`${classes.answer} ${correctAnswerClass} ${incorrectAnswerClass} ${disabledClass} `}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className={classes["answer-letter"]}>{letterMapping[index]}</div>
      <div className={classes["answer-text"]}>{answerText}</div>
    </div>
  );
};

export default Answers;
