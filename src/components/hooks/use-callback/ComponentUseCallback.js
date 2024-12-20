import {useCallback, useState} from "react";

import ChildComponentUseCallback from "./ChildComponentUseCallback";

const ComponentUseCallback = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increase = () => setCounter(counter + 1);
  const increase2 = () => setCounter2(counter2 + 1);

  // const childFunc = () => {};
  const childFunc = useCallback(() => {
    console.log('childFunc')
  }, [counter])

  return (
    <main>
      <p>Счетчик: {counter}</p>
      <div className="SimpleUseState--buttons">
        <button onClick={increase}>Увеличить</button>
      </div>
      <p>Счетчик2: {counter2}</p>
      <div className="SimpleUseState--buttons">
        <button onClick={increase2}>Увеличить 2</button>
      </div>

      <ChildComponentUseCallback childFunc={childFunc}/>
    </main>
  )
}

export default ComponentUseCallback;