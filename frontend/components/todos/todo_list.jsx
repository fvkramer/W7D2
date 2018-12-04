import React from 'react';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo}) => {
  const listItems = todos.map((todo, ind) => {
    return <TodoListItem key={ind} title={todo.title}/>
  })
  return (
    <div>
      <ul>
        {listItems}
      </ul>
      <TodoForm receiveTodo={receiveTodo} />
    </div>
  );
};

const TodoListItem = ({title}) => {
  return (
    <li>{title}</li>
  );
};

export default TodoList;
// module.exports = () => <h3>Todo list goes here </h3>;
