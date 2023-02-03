import React, { useContext } from "react";
import { JsQuizContext } from "../../context/jsquiz";
import classes from "../../main.module.css";
import Answers from "../quiz/Answers";

const JsQuestions = () => {
  const [quizState, dispatch] = useContext(JsQuizContext);
  const currentQuestion = quizState.jsquestions[quizState.currentQuestionIndex];
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

export default JsQuestions;
