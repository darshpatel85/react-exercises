import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const Header = () => {
  const { timeLimit, minLimit, maxLimit, questionCount } = useContext(
    QuizContext
  );

  return (
    <>
      <div className="col-md-12">Details Of Quiz</div>
      <div className="row">
        <div className="col-md-6 h6 left-align">Min Limit: {minLimit}</div>
        <div className="col-md-6 h6 left-align">Max Limit: {maxLimit}</div>
        <div className="col-md-6 h6 left-align">Timer: {timeLimit}</div>
        <div className="col-md-6 h6 left-align">
          Question Count: {questionCount}
        </div>
      </div>
    </>
  );
};
export default Header;
