import {useState, useTransition} from "react";

import {LIST_SIZE} from "./ComponentUseTransition";

const FastExample = () => {
  const [isPending, startTransition] = useTransition();

  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    startTransition(() => {
      const newData = [];

      for (let i = 0; i < LIST_SIZE; i++) {
        newData.push(newValue)
      }

      setData(newData);
    })
  }

  return (
    <div>
      <h2>Быстро</h2>
      <input value={value} onChange={handleChange} />
      {isPending ? (
        <p>Загрузка...</p>
      ) : (
        <ul>
          {data.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FastExample;