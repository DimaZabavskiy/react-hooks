let todos = [];
let listeners = [];

export const todosStore = {
  addTodo: (value) => {
    todos = [
      ...todos,
      value,
    ];
    emitChange();
  },

  subscribe: (listener) => {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(
        (l) => l !== listener
      );
    };
  },

  getSnapshot: () => {
    return todos;
  },
};

const emitChange = () => {
  for (let listener of listeners) {
    listener();
  }
}