export const INITIAL_STATE = {
  count: 0,
  step: 1,
};


export const CounterReducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count: state.count + state.step}

        case 'dec':
            return {...state, count: state.count - state.step}

        case 'setCount':
            return {...state, count: action.payload}

        case 'setStep':
            return {...state, step: action.payload}
        case 'reset':
            return INITIAL_STATE

        default:
            return state;
    }

}