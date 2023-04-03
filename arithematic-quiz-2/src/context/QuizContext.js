import { createContext, useReducer } from "react";
import { questionGenerator } from "../utils/questionGenerator";
import quizContextReducer from "./reducer";

export const QuizContext = createContext(null);

const QuizContextProvider = ({ quiz, children }) => {
  const initState = {
    ...quiz,
    questions: questionGenerator(
      quiz.questionCount,
      quiz.minLimit,
      quiz.maxLimit,
      quiz.operators
    ),
    currentQuestionIndex: 0,
    score: 0,
    isStart: true
  };

  const [state, dispatch] = useReducer(quizContextReducer, initState);
  return (
    <QuizContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
