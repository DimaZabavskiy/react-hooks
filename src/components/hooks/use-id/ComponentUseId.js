import ReaderComponent from "./ReaderComponent";
import RandomId from "./RandomId";
import {useState} from "react";


const ComponentUseId = () => {
  const [value, setValue] = useState('');

  return (
    <main>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <ReaderComponent label="some label" text="text description" />
      <ReaderComponent label="some label 2" text="text description" />
      <ReaderComponent label="some label 3" text="text description" />
      <RandomId label="some label 4" text="text description" />
    </main>
  );
}

export default ComponentUseId;