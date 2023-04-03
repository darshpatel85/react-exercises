import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const GameTimer = ({ timer }) => {
  const { currentQuestionIndex } = useContext(QuizContext);
  return (
    <div className="row">
      <div className="h4 col-md-6 left-align">
        Question No. - {currentQuestionIndex + 1}
      </div>
      <div className="h4 col-md-6 right-align">
        Time Left - <span className="text-red">{timer}</span>
      </div>
    </div>
  );
};

export default GameTimer;
