import CssQuiz from "./components/cssQuiz/CssQuiz";
import Home from "./components/home/Home";
import HtmlQuiz from "./components/htlmQuiz/HtmlQuiz";
import JsQuiz from "./components/jsQuiz/JsQuiz";
import ReactQuiz from "./components/reactQuiz/ReactQuiz";
import { Route, Routes } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/html" element={<HtmlQuiz />} />
      <Route exact path="/css" element={<CssQuiz />} />
      <Route exact path="/js" element={<JsQuiz />} />
      <Route exact path="/react" element={<ReactQuiz />} />
    </Routes>
  );
};

export default App;
