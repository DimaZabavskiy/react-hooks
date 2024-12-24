import {memo} from "react";


function SlowItem({ text }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="item">Text: {text}</li>;
}

const PreparedList = memo(({text}) => {
  const list = [];

  for (let i = 0; i < 250; i++) {
    list.push(<SlowItem key={i} text={text} />)
  }

  return (
    <ul>{list}</ul>
  )
})

export default PreparedList;