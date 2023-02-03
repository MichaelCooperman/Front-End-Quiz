import React, { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import classes from "../../main.module.css";
import Answers from "./Answers";

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
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

export default Questions;
