import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../../context/quiz";
import classes from "../../main.module.css";
import Questions from "../quiz/Questions";
import { AiFillHome } from "react-icons/ai";

const CssQuiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <section>
      <div className={classes["quiz-container"]}>
        {quizState.showResults && (
          <div className={classes.results}>
            <h2 className={classes.congrats}>Congratulations</h2>
            <div className={classes["results-info"]}>
              <h3>You have completed the quiz.</h3>
              <h3>
                You've got {quizState.correctAnswerCount} of {""}
                {quizState.questions.length} correct.
              </h3>
              <div className={classes["button-restart-box"]}>
                <button
                  className={classes["button-restart"]}
                  onClick={() => dispatch({ type: "RESTART" })}
                >
                  Restart
                </button>
                <Link
                  className={classes["button-restart"]}
                  onClick={() => dispatch({ type: "RESTART" })}
                  to="/"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        )}

        {!quizState.showResults && (
          <React.Fragment>
            <div className={classes["top"]}>
              <Link onClick={() => dispatch({ type: "RESTART" })} to="/">
                <AiFillHome size="30px" color="black" />
              </Link>
              <h3>
                Question {quizState.currentQuestionIndex + 1} of {""}
                {quizState.questions.length}
              </h3>
            </div>
            <div className={classes["question-number"]}>
              <Questions />
              <div className={classes["button-box"]}>
                <button
                  className={classes["buttons"]}
                  onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                >
                  Next Question
                </button>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </section>
  );
};

export default CssQuiz;
