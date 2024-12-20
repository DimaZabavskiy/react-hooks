import {hooksList} from "../../helpers/constants";

const SelectedHook = ({selectedHook}) => {
  const selectedHookComponent = hooksList.find(hook => hook.name === selectedHook);

  if (!selectedHookComponent?.component) {
    return (
      <p>
        Не найден контент для хука {selectedHook}
      </p>
    )
  }

  const Component = selectedHookComponent.component;

  return <Component />;
}

export default SelectedHook