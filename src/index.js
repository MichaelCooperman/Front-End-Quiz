import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QuizProvider } from "./context/quiz";
import { HtmlQuizProvider } from "./context/htmlquiz";
import { JsQuizProvider } from "./context/jsquiz";
import { ReactQuizProvider } from "./context/reactquiz";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizProvider>
        <HtmlQuizProvider>
          <JsQuizProvider>
            <ReactQuizProvider>
              <App />
            </ReactQuizProvider>
          </JsQuizProvider>
        </HtmlQuizProvider>
      </QuizProvider>
    </BrowserRouter>
  </React.StrictMode>
);
