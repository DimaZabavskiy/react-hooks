import {useMarkedCustomHook} from "./useMarkedCustomHook";
import {useCustomHook} from "./useCustomHook";
import {useState} from "react";

const ComponentUseDebugValue = () => {

  const [value, setValue] = useState('INITIAL');

  const hookValues = useMarkedCustomHook(value);
  useCustomHook();

  return (
    <main>
      <p>Активная метка - {value}</p>
      <button onClick={() => setValue('INITIAL')}>INITIAL</button>
      <button onClick={() => setValue('ANOTHER')}>ANOTHER</button>
    </main>
  )
}

export default ComponentUseDebugValue;