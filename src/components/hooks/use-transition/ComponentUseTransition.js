import FastExample from "./FastExample";
import SlowExample from "./SlowExample";

export const LIST_SIZE = 20000;

const ComponentUseTransition = () => {
  return (
    <main style={{display: "flex", minWidth: "500px"}}>
      <div style={{flex: 1}}>
        <SlowExample/>
      </div>
      <div style={{flex: 1}}>
        <FastExample/>
      </div>
    </main>
  )
}

export default ComponentUseTransition;