import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import GameBox from "./GameBox";
import Header from "./Header";
import ScoreBoard from "./ScoreBoard";
import ScoreCard from "./ScoreCard";

const Quiz = () => {
  const { isStart } = useContext(QuizContext);

  return (
    <div className="col-md-4">
      <div className="quiz-box">
        <Header />
        {isStart && <GameBox />}
        <br />
        <ScoreCard />
        <br />
        {!isStart && <ScoreBoard />}
      </div>
    </div>
  );
};

export default Quiz;
