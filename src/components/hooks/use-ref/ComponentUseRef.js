import {useEffect, useRef, useState} from "react";

const initialCounter = 0;

const ComponentUseRef = () => {
  const ref = useRef(null);

  const [counter, setCounter] = useState(initialCounter);
  const prevCounterRef = useRef(initialCounter);

  useEffect(() => {
    console.log({ counter, prevCounterRef: prevCounterRef.current });
    return () => {
      prevCounterRef.current = counter;
    }
  }, [counter])

  useEffect(() => {
    console.log('ComponentUseRef useEffect: ', ref.current);
    if (ref.current) {
      const refHandleClick = () => {
        console.log('refHandleClick')
      }

      ref.current?.addEventListener("click", refHandleClick);

      return () => {
        ref.current?.removeEventListener("click", refHandleClick);
      };
    }
  }, [ref.current]);

  const setRedBack = () => {
    ref.current.style.background = "red";
  }

  const resetRedBack = () => {
    ref.current.style.background = "unset";
  }

  const setValue = () => {
    ref.current.innerText = "Солнышко";
  }

  return (
    <main>
      <div ref={ref}>
        Блок со ссылкой
      </div>

      <button onClick={setRedBack}>
        Установить красный фон
      </button>
      <button onClick={resetRedBack}>
        Очистить фон
      </button>
      <button onClick={setValue}>
        Установить другое value
      </button>

      <p>
        Актуальный counter - {counter},
        предыдущий counter - {prevCounterRef.current},
      </p>
      <button onClick={() => setCounter(counter + 1)}>
        Увеличить counter
      </button>
    </main>
  );
}

export default ComponentUseRef