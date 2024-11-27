export const INITIAL_STATE = {
  questions: [],
  // 'loading' 'error', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining: 10,
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
      return { ...state, status: "finished", index: state.index + 1 };

    case "RESTART":
      return { ...state, status: "ready", index: 0, answer: null };
    case "TICK":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      return state;
  }
};
