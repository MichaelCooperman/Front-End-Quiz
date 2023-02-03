import reactquestions from "../data/reactdata";
import { createContext, useReducer } from "react";
import { shuffleAnswers } from "../helpers";

const initialState = {
  reactquestions,
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount: 0,
  answers: shuffleAnswers(reactquestions[0]),
  currentAnswer: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswerCount =
        action.payload ===
        state.reactquestions[state.currentQuestionIndex].correctAnswer
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
        state.currentQuestionIndex === state.reactquestions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.reactquestions[currentQuestionIndex]);
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

export const ReactQuizContext = createContext();

export const ReactQuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return (
    <ReactQuizContext.Provider value={value}>
      {children}
    </ReactQuizContext.Provider>
  );
};
