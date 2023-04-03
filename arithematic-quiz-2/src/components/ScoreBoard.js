import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import ScoreTable from "./scoreTable";

const filterAnswers = (questions) => {
  const correctAnswer = [];
  const inCorrectAnswer = [];
  questions.forEach((question) => {
    if (question.answer === question.response) {
      correctAnswer.push(question);
    } else {
      inCorrectAnswer.push(question);
    }
  });
  return { correctAnswer, inCorrectAnswer };
};

const ScoreBoard = () => {
  const { questions } = useContext(QuizContext);

  const { correctAnswer, inCorrectAnswer } = filterAnswers(questions);
  return (
    <div className="col-md-12">
      {correctAnswer.length > 0 && (
        <ScoreTable title="Correct answers are" data={correctAnswer} />
      )}
      {inCorrectAnswer.length > 0 && (
        <ScoreTable title="Incorrect answers are" data={inCorrectAnswer} />
      )}
    </div>
  );
};
export default ScoreBoard;
