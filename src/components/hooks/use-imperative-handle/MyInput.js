import { useRef, useImperativeHandle } from 'react';

import Description from "./Description";

function MyInput({ ref }) {
  const inputRef = useRef(null);
  const descriptionRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focusAndShowDescription: () => {
        inputRef.current.focus();
        descriptionRef.current.showInfo();
      },
    };
  }, []);

  const handleBlur = () => {
    descriptionRef.current.hideInfo();
  }

  return (
    <div>
      <input ref={inputRef} onBlur={handleBlur} />
      <Description ref={descriptionRef} />
    </div>
  );
};

export default MyInput;
