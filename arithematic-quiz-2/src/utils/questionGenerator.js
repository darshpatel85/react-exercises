import { FLOATING_POINT } from "./config";

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getAnswer = (leftOperand, rightOperand, operator) => {
  switch (operator) {
    case "+":
      return leftOperand + rightOperand;
    case "-":
      return leftOperand - rightOperand;
    case "*":
      return leftOperand * rightOperand;
    default:
      return leftOperand / rightOperand;
  }
};

export const questionGenerator = (
  count,
  minLimit,
  maxLimit,
  operators = ["+", "-", "*", "/"]
) => {
  const questions = [];
  for (let index = 0; index < count; index++) {
    const leftOperand = getRandom(minLimit, maxLimit);
    const rightOperand = getRandom(minLimit, maxLimit);
    const operator = operators[getRandom(0, operators.length)];

    const answer = getAnswer(leftOperand, rightOperand, operator).toFixed(
      FLOATING_POINT
    );

    questions.push({
      id: index,
      leftOperand,
      rightOperand,
      operator,
      answer,
    });
  }
  return questions;
};
