import {createContext, useState} from "react";

import CardExample from "./CardExample";

export const ThemeContext = createContext(null);

const ComponentUseContext = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={() => setTheme('dark')}>Темная</button>
        <button onClick={() => setTheme('light')}>Светлая</button>
      </div>
      <CardExample />
    </ThemeContext.Provider>
  )
}

export default ComponentUseContext;