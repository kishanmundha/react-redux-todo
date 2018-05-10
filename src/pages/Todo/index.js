import { connect } from 'react-redux';

import Todo from './Todo';
import {
  TODO_ADD,
  TODO_MARK_COMPLETE,
  TODO_MARK_UNCOMPLETE,
  TODO_REMOVE,
} from '../../reducers/TodoAction';

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

const mapActionToProps = (dispatch) => ({
  TodoAdd: (todo) => dispatch({
    type: TODO_ADD,
    payload: todo,
  }),
  TodoRemove: (todo) => dispatch({
    type: TODO_REMOVE,
    payload: todo,
  }),
  TodoComplete: (todo) => dispatch({
    type: TODO_MARK_COMPLETE,
    payload: todo,
  }),
  TodoUncomplete: (todo) => dispatch({
    type: TODO_MARK_UNCOMPLETE,
    payload: todo,
  }),
});

export default connect(mapStateToProps, mapActionToProps)(Todo);
