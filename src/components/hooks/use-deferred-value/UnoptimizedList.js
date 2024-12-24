import {useState} from "react";

import PreparedList from "./PreparedList";

const UnoptimizedList = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <PreparedList text={value} />
    </div>
  )
}

export default UnoptimizedList;