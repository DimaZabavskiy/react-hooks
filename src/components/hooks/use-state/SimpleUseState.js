import {useState} from "react";

import "./SimpleUseState.css";

const getInitialCounter = (isCall = false) => {
  console.log('getInitialCounter', isCall);
  return 0;
};

const SimpleUseState = () => {
  const [counter, setCounter] = useState(0);

  // ОБЫЧНЫЙ вызов setState
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  //  ОБЯЗАТЕЛЬНО что-то вернет
  const getIncreasedValue = prevState => prevState + 1;

  // вызов setState через ФУНКЦИЮ
  const increaseFunc = () => setCounter(getIncreasedValue);
  const decreaseFunc = () => setCounter(prevState => prevState - 1);
  const resetFunc = () => setCounter(() => 0);

  // ПОСЛЕДОВАТЕЛЬНЫЙ вызов ОБЫЧНЫХ setState
  const serialCall = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  }

  // ПОСЛЕДОВАТЕЛЬНЫЙ вызов setState через ФУНКЦИЮ
  const serialCallFunc = () => {
    setCounter(getIncreasedValue);
    setCounter(getIncreasedValue);
    setCounter(getIncreasedValue);
  }

  //  инициализация state С ВЫЗОВОМ функции
  const [counter2, setCounter2] = useState(getInitialCounter(true));
  const increase2 = () => setCounter2(counter2 + 1);

  //  инициализация state БЕЗ ВЫЗОВА функции
  const [counter3, setCounter3] = useState(getInitialCounter);
  const increase3 = () => setCounter3(counter3 + 1);


  // const localInitialValue = getInitialCounter(true);
  // // РЕАКТ СМОТРИТ В ХРАНИЛИЩЕ НАЛИЧИЕ STATE
  //
  // const localInitialValue = getInitialCounter;
  // // РЕАКТ СМОТРИТ В ХРАНИЛИЩЕ НАЛИЧИЕ STATE
  //
  // if (reactDDD.counter3) {
  //   counter3 = reactDDD.counter3
  // } else {
  //   if (typeof localInitialValue === "function") {
  //     counter3 = localInitialValue();
  //   } else {
  //     counter3 = localInitialValue;
  //   }
  // }

  return (
    <div>
      <p>Счетчик 1: {counter}</p>
      <div className="SimpleUseState--buttons">
        <button onClick={increase}>Увеличить (стейт)</button>
        <button onClick={decrease}>Уменьшить (стейт)</button>
        <button onClick={reset}>Обнулить (стейт)</button>
      </div>
      <div className="SimpleUseState--buttons">
        <button onClick={increaseFunc}>Увеличить (функция)</button>
        <button onClick={decreaseFunc}>Уменьшить (функция)</button>
        <button onClick={resetFunc}>Обнулить (функция)</button>
      </div>
      <div className="SimpleUseState--buttons">
        <button onClick={serialCall}>Последовательный вызов</button>
        <button onClick={serialCallFunc}>Последовательный вызов (функция)</button>
      </div>

      <p>Счетчик 2: {counter2}</p>
      <div className="SimpleUseState--buttons">
        <button onClick={increase2}>Увеличить счетчик 2</button>
      </div>

      <p>Счетчик 3: {counter3}</p>
      <div className="SimpleUseState--buttons">
        <button onClick={increase3}>Увеличить счетчик 3</button>
      </div>
    </div>
  )
}

export default SimpleUseState;