import Quiz from "./Quiz";
import QuizContextProvider from "../context/QuizContext";
import QuizCreateForm from "./QuizCreateForm";
import { useState } from "react";

export default function App() {
  const [quizzes, setQuizzes] = useState([]);

  const addQuiz = (newQuiz) => {
    setQuizzes([...quizzes, newQuiz]);
  };

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
