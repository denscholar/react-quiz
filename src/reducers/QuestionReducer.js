export const INITIAL_STATE = {
  questions: [],
  // 'loading' 'error', 'active', 'finished'
  status: "loading",
  index: 0,
};

export const questionReducer = (state, action) => {
  switch (action.type) {
    case "DATA_RECEIVED":
      return { ...state, questions: action.payload, status: "ready" };

    case "DATA_FAILED":
      return { ...state, status: "error" };

    case "START":
      return { ...state, status: "active" };

    default:
      break;
  }
};
