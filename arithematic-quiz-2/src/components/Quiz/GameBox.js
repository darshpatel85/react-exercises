import { useContext, useEffect, useState } from "react";

import QuestionBox from "./QuestionBox";
import GameTimer from "./GameTimer";

import { QuizContext } from "../../context/QuizContext";

const GameBox = () => {
  const { timeLimit } = useContext(QuizContext);
  const [timer, setTimer] = useState(timeLimit);

  useEffect(() => {
    const timerFunction = () => {
      setTimer((timer) => timer - 1);
    };
    const clearTimer = () => clearInterval(timerId);

    const timerId = setInterval(timerFunction, 1000);
    return clearTimer;
  }, []);

  const resetTime = () => {
    setTimer(timeLimit);
  };

  return (
    <div className="col-md-12">
      <div className="col-md-12">
        <GameTimer timer={timer} />
        <br />
        <QuestionBox timer={timer} resetTime={resetTime} />
      </div>
    </div>
  );
};

export default GameBox;
