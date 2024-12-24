import OptimizedList from "./OptimizedList";
import UnoptimizedList from "./UnoptimizedList";

const ComponentUseDeferredValue = () => {
  return (
    <main style={{display: 'flex', minWidth: '500px'}}>
      <div style={{flex: 1}}>
        <h2>Оптимизировано</h2>
        <OptimizedList/>
      </div>
      <div style={{flex: 1}}>
        <h2>НЕ оптимизировано</h2>
        <UnoptimizedList/>
      </div>
    </main>
  )
}

export default ComponentUseDeferredValue;