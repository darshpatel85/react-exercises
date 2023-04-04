import { createContext, useReducer } from "react";

import quizContextReducer from "./reducer";

import { questionGenerator } from "../utils/questionGenerator";

export const QuizContext = createContext(null);

const QuizContextProvider = ({ quiz, children }) => {
  const { questionCount, minLimit, maxLimit, operators } = quiz;
  const initState = {
    ...quiz,
    questions: questionGenerator(questionCount, minLimit, maxLimit, operators),
    currentQuestionIndex: 0,
    score: 0,
    started: true,
  };

  const [state, dispatch] = useReducer(quizContextReducer, initState);

  return (
    <QuizContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
