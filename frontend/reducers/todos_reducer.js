import { RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions';
import { receiveTodos, receiveTodo } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case RECEIVE_TODOS:
      newState = action.todos;
      return newState;
    case RECEIVE_TODO:
      // newState = state;
      newState[action.todo.id] = action.todo; 
      return merge ({}, state, newState);
    default:
      return state;
  }
};

export default todosReducer;

// 
// let todo = {id: 3, title: "Party in the USA"}
// let action  = receiveTodo(todo)
// store.dispatch(action)

