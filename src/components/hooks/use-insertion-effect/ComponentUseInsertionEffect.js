import {useEffect, useInsertionEffect, useLayoutEffect, useState} from "react";

import {getStyleRule} from "./helpers";

const ComponentUseInsertionEffect = () => {
  const [theme, setTheme] = useState("light");

  useInsertionEffect(() => {
    console.log('useInsertionEffect')

    const styleRule = getStyleRule(theme);
    document.head.appendChild(styleRule);

    return () => {
      document.head.removeChild(styleRule);
    }
  }, [theme])

  useEffect(() => {
    console.log('useEffect')
  }, [theme])

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  }, [theme])

  console.log('render')

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <main>
      <div>Тут могла быть ваша реклама</div>
      <button onClick={changeTheme}>Поменять тему</button>
    </main>
  )
}

export default ComponentUseInsertionEffect;