import {useActionState} from "react";

import {sendData} from "./actions";

const ComponentUseActionState = () => {
  const [formState, formAction, isPending] = useActionState(sendData, {});

  const renderStatus = () => {

    const spaces = {padding: "10px", margin: "10px 0"};

    if (isPending) {
      return (
        <div style={{...spaces}}>Отправка данных...</div>
      )
    }

    switch (formState.status) {
      case "success":
        return (
          <div style={{...spaces, background: "green"}}>{formState.message}</div>
        );

      case "error":
        return (
          <div style={{...spaces, background: "red"}}>{formState.message}</div>
        );

      default:
        return null;
    }
  }

  return (
    <main>
      <form action={formAction}>
        <input name="useActionStateInput" disabled={isPending} />
        <button type="submit" disabled={isPending} >Отправить</button>
        {renderStatus()}
      </form>
    </main>
  );
}

export default ComponentUseActionState;