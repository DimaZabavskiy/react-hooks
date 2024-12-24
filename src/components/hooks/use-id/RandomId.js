const RandomId = ({label, text}) => {
  const uniqId = Math.random().toString();

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

export default RandomId;