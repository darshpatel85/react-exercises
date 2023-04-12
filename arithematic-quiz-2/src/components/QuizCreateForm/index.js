import { useCallback, useState } from "react";

import Form from "react-bootstrap/Form";

const defaultQuizData = {
  minLimit: "",
  maxLimit: "",
  timeLimit: "",
  questionCount: "",
  operations: [],
};
const OPERATORS = ["+", "-", "*", "/"];

const QuizCreateForm = ({ addQuiz }) => {
  const [quizData, setQuizData] = useState(defaultQuizData);

  const formFields = [
    {
      name: "minLimit",
      label: "Min Limit",
      otherProps: {
        max: quizData.maxLimit,
      },
    },
    {
      name: "maxLimit",
      label: "Max Limit",
      otherProps: {
        min: quizData.minLimit,
      },
    },
    {
      name: "timeLimit",
      label: "Timer",
      otherProps: {
        min: "1",
      },
    },
    {
      name: "questionCount",
      label: "No of Question",
      otherProps: {
        min: "1",
      },
    },
  ];

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "operations") {
      if (checked) {
        setQuizData({
          ...quizData,
          operations: [...quizData.operations, value],
        });
      } else {
        setQuizData({
          ...quizData,
          operations: quizData.operations.filter((item) => item !== value),
        });
      }
    } else {
      setQuizData({ ...quizData, [name]: parseInt(value) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuiz({ ...quizData, id: Date.now() });
    setQuizData(defaultQuizData);
  };

  return (
    <div className="col-md-6">
      <div className="row input-form">
        <div className="text-center h4">Quiz Generation</div>
        <br />
        <Form onSubmit={handleSubmit}>
          <div className="row">
            {formFields.map(({ name, label, otherProps }) => (
              <Form.Group
                key={name}
                className="col-md-6  mb-3"
                controlId="minLimit"
              >
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  value={quizData[name]}
                  onChange={handleChange}
                  type="number"
                  name={name}
                  required
                  {...otherProps}
                />
              </Form.Group>
            ))}
            <Form.Group className="col-md-6 mb-3" controlId="operations">
              <Form.Label>Operations</Form.Label>
              {OPERATORS.map((operator) => (
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
