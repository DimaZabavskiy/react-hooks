import {hooksList} from "../../helpers/constants";

import "./HooksList.css";

const HooksList = ({selectedHook, setSelectedHook}) => {
  return (
    <nav className="hooks-list">
      <ul className="hooks-list__list">
        {hooksList.map(hook => (
          <li key={hook.name} className="hooks-list__list-item">
            <button onClick={() => setSelectedHook(hook.name)}>
              {
                hook.name === selectedHook
                  ? <h2>{hook.name}</h2>
                  : <h3>{hook.name}</h3>
              }
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HooksList;