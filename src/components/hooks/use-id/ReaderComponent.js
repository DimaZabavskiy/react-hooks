import {useId} from "react";

const ReaderComponent = ({label, text}) => {
  const uniqId = useId();

  return (
    <div>
      <label>
        {label}:
        <input aria-describedby={uniqId} />
      </label>
      <p id={uniqId}>{text}, uniqId - {uniqId}</p>
    </div>
  )
}

export default ReaderComponent;