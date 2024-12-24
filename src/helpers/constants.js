import ComponentUseState from "../components/hooks/use-state/ComponentUseState";
import ComponentUseEffect from "../components/hooks/use-effect/ComponentUseEffect";
import ComponentUseRef from "../components/hooks/use-ref/ComponentUseRef";
import ComponentUseReducer from "../components/hooks/use-reducer/ComponentUseReducer";
import ComponentUseMemo from "../components/hooks/use-memo/ComponentUseMemo";
import ComponentUseCallback from "../components/hooks/use-callback/ComponentUseCallback";
import ComponentUseContext from "../components/hooks/use-context/ComponentUseContext";
import ComponentUseActionState from "../components/hooks/use-action-state/ComponentUseActionState";
import ComponentUseDebugValue from "../components/hooks/use-debug-value/ComponentUseDebugValue";
import ComponentUseDeferredValue from "../components/hooks/use-deferred-value/ComponentUseDeferredValue";
import ComponentUseId from "../components/hooks/use-id/ComponentUseId";

export const hooksList = [
  {name: 'useState', component: ComponentUseState},
  {name: 'useEffect', component: ComponentUseEffect},
  {name: 'useRef', component: ComponentUseRef},
  {name: 'useReducer', component: ComponentUseReducer},
  {name: 'useMemo', component: ComponentUseMemo},
  {name: 'useCallback', component: ComponentUseCallback},
  {name: 'useContext', component: ComponentUseContext},
  {name: 'useActionState', component: ComponentUseActionState},
  {name: 'useDebugValue', component: ComponentUseDebugValue},
  {name: 'useDeferredValue', component: ComponentUseDeferredValue},
  {name: 'useId', component: ComponentUseId},
]