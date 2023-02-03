import React, { useContext } from "react";
import { ReactQuizContext } from "../../context/reactquiz";
import classes from "../../main.module.css";
import Answers from "../quiz/Answers";

const ReactQuestions = () => {
  const [quizState, dispatch] = useContext(ReactQuizContext);
  const currentQuestion =
    quizState.reactquestions[quizState.currentQuestionIndex];
  return (
    <div>
      <div className={classes.question}>{currentQuestion.question}</div>
      <div className={classes.answers}>
        {quizState.answers.map((answers, index) => (
          <Answers
            answerText={answers}
            key={index}
            index={index}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ReactQuestions;
