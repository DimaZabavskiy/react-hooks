import {useDebugValue, useState} from "react";

export const useMarkedCustomHook = (mark) => {
  useDebugValue(mark || 'UNKNOWN');

  const [value, setValue] = useState('');

  return [value, setValue]
}