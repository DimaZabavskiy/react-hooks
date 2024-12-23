import ComponentUseState from "../components/hooks/use-state/ComponentUseState";
import ComponentUseEffect from "../components/hooks/use-effect/ComponentUseEffect";
import ComponentUseRef from "../components/hooks/use-ref/ComponentUseRef";
import ComponentUseReducer from "../components/hooks/use-reducer/ComponentUseReducer";
import ComponentUseMemo from "../components/hooks/use-memo/ComponentUseMemo";
import ComponentUseCallback from "../components/hooks/use-callback/ComponentUseCallback";
import ComponentUseContext from "../components/hooks/use-context/ComponentUseContext";

export const hooksList = [
  {name: 'useState', component: ComponentUseState},
  {name: 'useEffect', component: ComponentUseEffect},
  {name: 'useRef', component: ComponentUseRef},
  {name: 'useReducer', component: ComponentUseReducer},
  {name: 'useMemo', component: ComponentUseMemo},
  {name: 'useCallback', component: ComponentUseCallback},
  {name: 'useContext', component: ComponentUseContext},
]