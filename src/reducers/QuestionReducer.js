export const INITIAL_STATE = {
  questions: [],
  // 'loading' 'error', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

export const questionReducer = (state, action) => {
  switch (action.type) {
    case "DATA_RECEIVED":
      return { ...state, questions: action.payload, status: "ready" };

    case "DATA_FAILED":
      return { ...state, status: "error" };

    case "START":
      return { ...state, status: "active" };

    case "NEW_ANSWER":
      // get the current question
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "NEXT_QUESTION":
      return { ...state, index: state.index + 1, answer: null };

    case "FINISHED":
      return { ...state, index: state.index + 1, answer: null };

    default:
      break;
  }
};
