import { RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions';
import { receiveTodos, receiveTodo } from '../actions/todo_actions';

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
  switch (action.type) {
    case RECEIVE_TODOS:
      
      break;
    
    case RECEIVE_TODO:
    
      break;
    default:
      return state;
  }
};

export default todosReducer;