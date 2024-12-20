import {useEffect, useState} from "react";

const ComponentUseEffect = props => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const increase = () => {
      console.log('increase');
      setCounter(prevState => prevState + 1)
    };

    console.log('ПОДПИСКА window на mousedown');
    window.addEventListener('mousedown', increase);

    return () => {
      console.log('компонент РАЗМОНТИРОВАН');
      console.log('ОТПИСКА window от mousedown');
      window.removeEventListener('mousedown', increase);
    };
  }, [])

  useEffect(() => {
    setTimeout(() => {
      console.log('Устанавливаем counter на 100');
      setCounter(100);
    }, 5000);
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Устанавливаем counter на 200');
      setCounter(200);
    }, 10000);

    return () => {
      console.log('Останавливаем/удаляем таймер');
      clearTimeout(timer);
    }
  }, [])

  useEffect(() => {
    let isActual = true;

    setTimeout(() => {
      console.log({isActual});
      if (isActual) {
        console.log('Устанавливаем counter на 300');
        setCounter(300);
      }
    }, 20000);

    return () => {
      console.log('isActual false !!!');
      isActual = false;
    }
  }, [])

  return (
    <main>
      <p>Счетчик: {counter}</p>
    </main>
  )
}

export default ComponentUseEffect;