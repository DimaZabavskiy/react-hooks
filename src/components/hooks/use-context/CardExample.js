import {useContext} from "react";

import {ThemeContext} from "./ComponentUseContext";

const CardExample = () => {
  const theme = useContext(ThemeContext);

  const styles = theme === "light" ? {
    backgroundColor: "white",
    color: "black",
  } : {
    backgroundColor: "black",
    color: "white",
  }

  return (
    <div style={{...styles, margin: "10px 0", padding: "10px"}}>
      Выбрана тема - {theme}
    </div>
  )
}

export default CardExample