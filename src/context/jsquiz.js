import jsquestions from "../data/jsdata";
import { createContext, useReducer } from "react";
import { shuffleAnswers } from "../helpers";

const initialState = {
  jsquestions,
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount: 0,
  answers: shuffleAnswers(jsquestions[0]),
  currentAnswer: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswerCount =
        action.payload ===
        state.jsquestions[state.currentQuestionIndex].correctAnswer
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
        state.currentQuestionIndex === state.jsquestions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.jsquestions[currentQuestionIndex]);
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

export const JsQuizContext = createContext();

export const JsQuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return (
    <JsQuizContext.Provider value={value}>{children}</JsQuizContext.Provider>
  );
};
