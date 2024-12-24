import {useDeferredValue, useState} from "react";

import PreparedList from "./PreparedList";

const OptimizedList = () => {
  const [value, setValue] = useState('');
  const deferredValue = useDeferredValue(value);

  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <PreparedList text={deferredValue} />
    </div>
  )
}

export default OptimizedList;