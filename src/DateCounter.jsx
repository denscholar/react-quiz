import { useReducer, useState } from "react";
import { INITIAL_STATE, CounterReducer } from "./reducers/Reducers";



1
function DateCounter() {

    const [state, dispatch] = useReducer(CounterReducer, INITIAL_STATE)

    // console.log(state.count, state.step);

    

    // This mutates the date object.
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + state.count);

    const dec = function () {
        dispatch({type: 'dec'})
    };

    const inc = function () {
        dispatch({type: 'inc'})
    };

    const defineCount = function (e) {
        dispatch({type: 'setCount', payload: (Number(e.target.value))})
    };

    const defineStep = function (e) {
        dispatch({type: 'setStep', payload: (Number(e.target.value))})
    };

    const reset = function () {
        dispatch({type: 'reset'})
    };

    return (
        <div className="counter">
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={state.step}
                onChange={defineStep}
                />
                <span>{state.step}</span>
            </div>

            <div>
                <button onClick={dec}>-</button>
                <input value={state.count} onChange={defineCount} />
                <button onClick={inc}>+</button>
            </div>

            <p>{date.toDateString()}</p>

            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}
export default DateCounter;