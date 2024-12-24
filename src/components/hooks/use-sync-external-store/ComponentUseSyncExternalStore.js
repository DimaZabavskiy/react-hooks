import {useState, useSyncExternalStore} from "react";

import {todosStore} from "./helpers";

const ComponentUseSyncExternalStore = () => {
  const [value, setValue] = useState("");

  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot
  );

  const addTodo = () => {
    todosStore.addTodo(value);
    setValue("");
  }

  return (
    <main>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={addTodo} disabled={!value}>
        Добавить
      </button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </main>
  );
}

export default ComponentUseSyncExternalStore;