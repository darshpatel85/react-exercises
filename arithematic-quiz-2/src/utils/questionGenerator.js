import { FLOATING_POINT } from "./config";

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const doMath = (left, right, operator) => {
  switch (operator) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    default:
      return left / right;
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
    const answer = doMath(leftOperand, rightOperand, operator).toFixed(
      FLOATING_POINT
    );
    questions.push({
      id: index,
      leftOperand,
      rightOperand,
      operator,
      answer
    });
  }
  return questions;
};
