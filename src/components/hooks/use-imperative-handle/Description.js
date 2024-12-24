import {useImperativeHandle, useRef} from "react";

const Description = ({ref}) => {
  const descriptionRef = useRef(null);

  useImperativeHandle(ref, () => ({
    showInfo: () => {
      descriptionRef.current.style.display = "block";
    },
    hideInfo: () => {
      descriptionRef.current.style.display = "none";
    }
  }));

  return (
    <p ref={descriptionRef} style={{ display: "none" }}>
      Описание какое-то
    </p>
  )
}

export default Description;