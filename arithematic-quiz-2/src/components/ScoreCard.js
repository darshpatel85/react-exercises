import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const ScoreCard = () => {
  const { score } = useContext(QuizContext);
  return <h3 className="col-md-12">Score -- {score}</h3>;
};

export default ScoreCard;
