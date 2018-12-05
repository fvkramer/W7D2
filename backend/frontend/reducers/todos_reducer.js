import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todo_actions';
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
      newState[action.todo.id] = action.todo;
      return merge ({}, state, newState);
    case REMOVE_TODO:
      newState = state;
      // return newState.filter(todo => )
      newState = Object.assign({}, state);
      let id = action.todo.id;
      for (var key in state) {
        if (state[key] != id) {
          newState[key] = state[key];
        }
      }
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
