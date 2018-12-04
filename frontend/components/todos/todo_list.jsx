import React from 'react';
import TodoForm from './todo_form';

const TodoList = ({todos}) => {
  const todos = [];

  for (var key in props) {
    if (key === 'title') {
      todos.push(props[key]);
    }
  }

  return (
    <div>
      <ul>
        {todos.map(todo => <TodoListItem item={todo}/>)}
      </ul>
      <TodoForm />
    </div>
  );
};


const TodoListItem = (item) => {
  return (
    <li>{item}</li>
  );
};

export default TodoList;
// module.exports = () => <h3>Todo list goes here </h3>;
