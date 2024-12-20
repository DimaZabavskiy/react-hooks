import {useState} from "react";

import HooksList from "./components/hooks-list/HooksList";
import SelectedHook from "./components/selected-hook/SelectedHook";

import './App.css';

function App() {
  const [selectedHook, setSelectedHook] = useState('');

  return (
    <div className="App">
      <div className="App-bar">
        <HooksList selectedHook={selectedHook} setSelectedHook={setSelectedHook}/>
      </div>
      {selectedHook &&
        <div className="App-selectedHook">
          <SelectedHook selectedHook={selectedHook}/>
        </div>
      }
</div>
)
  ;
}

export default App;
