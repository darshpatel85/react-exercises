import { useState } from "react";
import Form from "react-bootstrap/Form";

const defaultQuizData = {
  minLimit: "",
  maxLimit: "",
  timeLimit: "",
  questionCount: "",
  operations: []
};

const QuizCreateForm = ({ addQuiz }) => {
  const [quizData, setQuizData] = useState({ ...defaultQuizData });

  const handleChange = (e) => {
    if (e.target.name === "operations") {
      if (e.target.checked) {
        setQuizData({
          ...quizData,
          operations: [...quizData.operations, e.target.value]
        });
      } else {
        setQuizData({
          ...quizData,
          operations: quizData.operations.filter(
            (item) => item !== e.target.value
          )
        });
      }
    } else {
      setQuizData({ ...quizData, [e.target.name]: parseInt(e.target.value) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuiz({ ...quizData, id: Date.now() });
    setQuizData({ ...defaultQuizData });
  };

  return (
    <div className="col-md-6">
      <div className="row input-form">
        <div className="text-center h4">Quiz Generation</div>
        <br />
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <Form.Group className="col-md-6  mb-3" controlId="minLimit">
              <Form.Label>Min Limit</Form.Label>
              <Form.Control
                value={quizData.minLimit}
                onChange={handleChange}
                type="number"
                max={quizData.maxLimit}
                name="minLimit"
                required
              />
            </Form.Group>
            <Form.Group className="col-md-6  mb-3" controlId="maxLimit">
              <Form.Label>Max Limit</Form.Label>
              <Form.Control
                value={quizData.maxLimit}
                onChange={handleChange}
                type="number"
                min={quizData.minLimit}
                name="maxLimit"
                required
              />
            </Form.Group>
            <Form.Group className="col-md-6  mb-3" controlId="questionCount">
              <Form.Label>No of Question</Form.Label>
              <Form.Control
                value={quizData.questionCount}
                onChange={handleChange}
                type="number"
                name="questionCount"
                min="1"
                required
              />
            </Form.Group>
            <Form.Group className="col-md-6  mb-3" controlId="timeLimit">
              <Form.Label>Timer</Form.Label>
              <Form.Control
                value={quizData.timeLimit}
                onChange={handleChange}
                type="number"
                name="timeLimit"
                min="1"
                required
              />
            </Form.Group>
            <Form.Group className="col-md-6 mb-3" controlId="operations">
              <Form.Label>Operations</Form.Label>
              {["+", "-", "*", "/"].map((operator) => (
                <Form.Check
                  key={operator}
                  inline
                  validationmessage="Please check atleast one operator"
                  required={quizData.operations.length === 0}
                  onChange={handleChange}
                  label={operator}
                  value={operator}
                  checked={quizData.operations.includes(operator)}
                  name="operations"
                  type="checkbox"
                />
              ))}
            </Form.Group>
            <div className="col-md-12 form-group text-center">
              <button className="btn btn-success">Submit</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default QuizCreateForm;
