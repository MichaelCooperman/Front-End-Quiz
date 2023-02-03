import React, { useContext } from "react";
import { HtmlQuizContext } from "../../context/htmlquiz";
import classes from "../../main.module.css";
import Answers from "../quiz/Answers";

const HtmlQuestions = () => {
  const [quizState, dispatch] = useContext(HtmlQuizContext);
  const currentQuestion =
    quizState.htmlquestions[quizState.currentQuestionIndex];
  return (
    <div>
      <h2 className={classes.question}>{currentQuestion.question}</h2>
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

export default HtmlQuestions;
