import {
  TODO_ADD,
  TODO_MARK_COMPLETE,
  TODO_MARK_UNCOMPLETE,
  TODO_REMOVE,
} from './TodoAction';

const initState = {
  todos: [],
};

const AddTodo = (state, action) => {
  return {
    ...state,
    todos: [...state.todos, action.payload],
  };
};

const RemoveTodo = (state, action) => {
  // find index
  const index = state.todos.findIndex(x => x.title === action.payload.title);
  if (index === -1) {
    return state;
  }

  // remove item
  state.todos.splice(index, 1);
  
  return {
    ...state,
    todos: [...state.todos],
  };
};

const UpdateCompleteStatusTodo = (completeStatus) => (state, action) => {
  const todo = state.todos.find(x => x.title === action.payload.title);

  if (!todo) {
    return state;
  }

  todo.completed = completeStatus;

  return {
    ...state,
    todos: [...state.todos],
  };
};

const TodoReducer = (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return AddTodo(state, action);
    case TODO_REMOVE:
      return RemoveTodo(state, action);
    case TODO_MARK_COMPLETE:
      return UpdateCompleteStatusTodo(true)(state, action);
    case TODO_MARK_UNCOMPLETE:
      return UpdateCompleteStatusTodo(false)(state, action);
    default:
      return state;
  }
};

export default TodoReducer;
