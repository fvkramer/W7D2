const allTodos = (state) => {
  let todosItems = [];
  let stateKeys = Object.keys(state.todos);
  stateKeys.map(key => todosItems.push({key: state.todos[key]}));
  return todosItems;
};

window.allTodos = allTodos;

export default allTodos;
