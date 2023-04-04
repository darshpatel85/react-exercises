import { useContext } from "react";

import GameBox from "./GameBox";
import Header from "./Header";
import ScoreBoard from "./ScoreBoard";
import ScoreCard from "./ScoreCard";

import { QuizContext } from "../../context/QuizContext";

const Quiz = () => {
  const { started } = useContext(QuizContext);

  return (
    <div className="col-md-4">
      <div className="quiz-box">
        <Header />
        {started && <GameBox />}
        <br />
        <ScoreCard />
        <br />
        {!started && <ScoreBoard />}
      </div>
    </div>
  );
};

export default Quiz;
