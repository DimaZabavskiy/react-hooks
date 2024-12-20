import {memo} from "react";

const ChildComponentUseCallback = memo(({childFunc}) => {
  console.log('ChildComponentUseCallback');

  return (
    <div>ChildComponentUseCallback</div>
  )
})

export default ChildComponentUseCallback