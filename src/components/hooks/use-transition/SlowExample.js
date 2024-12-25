import {useState} from "react";

import {LIST_SIZE} from "./ComponentUseTransition";

const SlowExample = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    const newData = [];

    for (let i = 0; i < LIST_SIZE; i++) {
      newData.push(newValue)
    }

    setData(newData);
  }

  return (
    <div>
      <h2>Медленно</h2>
      <input value={value} onChange={handleChange} />
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default SlowExample;