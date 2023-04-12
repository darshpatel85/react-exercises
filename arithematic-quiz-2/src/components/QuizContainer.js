import { useState } from "react";

import Quiz from "./Quiz";
import QuizCreateForm from "./QuizCreateForm";

import QuizContextProvider from "../context/QuizContext";

export default function App() {
  const [quizzes, setQuizzes] = useState([]);

  const addQuiz = (newQuiz) => setQuizzes([...quizzes, newQuiz]);

  return (
    <>
      <QuizCreateForm addQuiz={addQuiz} />
      <div className="row">
        {quizzes.map((quiz) => (
          <QuizContextProvider quiz={quiz} key={quiz.id}>
            <Quiz />
          </QuizContextProvider>
        ))}
      </div>
    </>
  );
}
