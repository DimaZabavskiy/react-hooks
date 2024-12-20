import {useReducer} from "react";

const initialState = {
  counter: 0,
  name: '',
}

const reducer = (state, action) => {
  switch(action.type) {
    case "INCREASE":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "DECREASE":
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    case "NAME_CHANGE":
      return {
        ...state,
        name: action.payload,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

const ComponentUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = () => dispatch({type: "INCREASE"});
  const decrease = () => dispatch({type: "DECREASE", payload: 1});
  const reset = () => dispatch({type: "RESET"});

  const nameChange = e => {
    dispatch({
      type: "NAME_CHANGE",
      payload: e.target.value,
    })
  }

  return (
    <main>
      <p>
        Счетчик: {state.counter}
      </p>
      <div>
        <button onClick={increase}>Добавить</button>
        <button onClick={decrease}>Уменьшить</button>
      </div>
      <div>
        <input value={state.name} onChange={nameChange}/>
      </div>

      <button onClick={reset}>Очистить</button>
    </main>
  )
}

export default ComponentUseReducer;