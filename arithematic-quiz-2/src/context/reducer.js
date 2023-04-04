import { FLOATING_POINT } from "../utils/config";
import { SUBMIT_QUESTION } from "./actions";

const quizContextReducer = (state, { type, payload }) => {
  switch (type) {
    case SUBMIT_QUESTION: {
      let { score, currentQuestionIndex, questionCount, questions } = state;

      //if current question is last question than finish the game
      const started = !(currentQuestionIndex === questionCount - 1);

      const response = payload && parseFloat(payload).toFixed(FLOATING_POINT);
      questions[currentQuestionIndex].response = response;

      //if the answer is correct increase score by 1
      if (response === questions[currentQuestionIndex].answer) {
        score += 1;
      }

      return {
        ...state,
        started,
        score,
        questions,
        currentQuestionIndex: currentQuestionIndex + 1,
      };
    }
    default:
      return { ...state };
  }
};
export default quizContextReducer;
