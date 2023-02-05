import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JsQuizContext } from "../../context/jsquiz";
import classes from "../../main.module.css";
import { AiFillHome } from "react-icons/ai";
import JsQuestions from "./JsQuestions";

const JsQuiz = () => {
  const [quizState, dispatch] = useContext(JsQuizContext);
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
                {quizState.jsquestions.length} correct.
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
                {quizState.jsquestions.length}
              </h3>
            </div>
            <div className={classes["question-number"]}>
              <JsQuestions />
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

export default JsQuiz;
