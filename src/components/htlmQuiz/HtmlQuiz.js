import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HtmlQuizContext } from "../../context/htmlquiz";
import classes from "../../main.module.css";
import { AiFillHome } from "react-icons/ai";
import HtmlQuestions from "./HtmlQuestions";

const HtmlQuiz = () => {
  const [quizState, dispatch] = useContext(HtmlQuizContext);
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
                {quizState.htmlquestions.length} correct.
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
                {quizState.htmlquestions.length}
              </h3>
            </div>
            <div className={classes["question-number"]}>
              <HtmlQuestions />
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

export default HtmlQuiz;
