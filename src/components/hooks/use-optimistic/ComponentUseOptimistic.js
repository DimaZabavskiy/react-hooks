import {useActionState, useOptimistic} from "react";

const ComponentUseOptimistic = () => {
  const [formState, formAction, isPending] = useActionState(async (prevState, formData) => {
    const value = formData.get('useActionStateInput');

    addOptimisticData(value);

    await new Promise(resolve => setTimeout(resolve, 2000));

    if (value === 'error') {
      return prevState;
    }

    return [
      ...prevState,
      {message: value}
    ]
  }, []);

  const [optimisticData, addOptimisticData] = useOptimistic(
    formState,
    (state, newMessage) => ([
      ...state,
      {
        message: newMessage,
        loading: true
      }
    ])
  );

  return (
    <main>
      <form action={formAction}>
        <input name="useActionStateInput" disabled={isPending}/>
        <button type="submit" disabled={isPending}>Отправить</button>
      </form>
      <ul>
        {optimisticData.map((item, index) => (
          <li key={index}>
            {item.message}
            {item.loading && ' , загружается'}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default ComponentUseOptimistic;