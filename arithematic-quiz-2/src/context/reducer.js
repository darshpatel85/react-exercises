import { FLOATING_POINT } from "../utils/config";
import { SUBMIT_QUESTION } from "./actions";

const quizContextReducer = (state, { type, payload }) => {
  switch (type) {
    case SUBMIT_QUESTION: {
      let score = state.score;
      const questions = [...state.questions];
      let isStart = true;
      let response = payload && parseFloat(payload).toFixed(FLOATING_POINT);

      questions[state.currentQuestionIndex].response = response;
      if (response === state.questions[state.currentQuestionIndex].answer) {
        score += 1;
      }
      if (state.currentQuestionIndex === state.questionCount - 1)
        isStart = false;

      return {
        ...state,
        isStart,
        score,
        questions,
        currentQuestionIndex: state.currentQuestionIndex + 1
      };
    }
    default:
      return { ...state };
  }
};
export default quizContextReducer;
