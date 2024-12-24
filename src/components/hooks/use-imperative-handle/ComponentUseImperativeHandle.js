import {useRef} from "react";

import MyInput from "./MyInput";

const ComponentUseImperativeHandle = () => {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focusAndShowDescription();
  }

  return (
    <main>
      <MyInput ref={ref} />
      <button onClick={handleClick}>
        Сфокусировать
      </button>
    </main>
  );
}

export default ComponentUseImperativeHandle