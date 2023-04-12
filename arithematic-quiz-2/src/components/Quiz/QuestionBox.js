import { useCallback, useContext, useEffect, useMemo, useState } from "react";

import { QuizContext } from "../../context/QuizContext";

import { SUBMIT_QUESTION } from "../../context/actions";

const QuestionBox = ({ resetTime, timer }) => {
  const { questions, currentQuestionIndex, dispatch } = useContext(QuizContext);
  const [answerInput, setAnswerInput] = useState("");

  const { leftOperand, rightOperand, operator } = useMemo(
    () => questions[currentQuestionIndex],
    [currentQuestionIndex, questions]
  );

  const handleOnChange = (e) => setAnswerInput(e.target.value);

  const submitQuestion = useCallback(() => {
    dispatch({ type: SUBMIT_QUESTION, payload: answerInput });
    setAnswerInput("");
    resetTime();
  }, [answerInput, resetTime, dispatch]);

  useEffect(() => {
    if (timer <= 0) submitQuestion();
  }, [timer, submitQuestion]);

  return (
    <div className="row">
      <div className="col-md-3">
        <span className="question h3 text-center">
          {leftOperand} {operator} {rightOperand}
        </span>
      </div>
      <div className="col-md-4">
        <input
          value={answerInput}
          onChange={handleOnChange}
          type="number"
          className="answer-input form-control"
        />
      </div>
      <div className="col-md-3 col-md-offset-1">
        <button className="btn btn-primary" onClick={submitQuestion}>
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionBox;
