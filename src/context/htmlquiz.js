import htmlquestions from "../data/htmldata";
import { createContext, useReducer } from "react";
import { shuffleAnswers } from "../helpers";

const initialState = {
  htmlquestions,
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount: 0,
  answers: shuffleAnswers(htmlquestions[0]),
  currentAnswer: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswerCount =
        action.payload ===
        state.htmlquestions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCount,
      };
    }
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.htmlquestions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.htmlquestions[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: "",
      };
    }
    case "RESTART": {
      return initialState;
    }
    default:
      return state;
  }
};

export const HtmlQuizContext = createContext();

export const HtmlQuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return (
    <HtmlQuizContext.Provider value={value}>
      {children}
    </HtmlQuizContext.Provider>
  );
};
