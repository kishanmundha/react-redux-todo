import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { IconButton, Icon } from 'material-ui';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Header from '../../components/Header';

import './Todo.css';

class Todo extends Component {
  state = {
    todoText: '',
  };

  constructor(props) {
    super(props);
    this.handleAddTodoKeyUp = this.handleAddTodoKeyUp.bind(this);
  }

  handleAddTodoKeyUp(event) {
    const { TodoAdd, todos } = this.props;
    const { todoText } = this.state;

    if (!event.shiftKey && event.keyCode === 13 && todoText) {
      // duplicate item validation
      if (todos.find(x => x.title === todoText)) {
        return;
      }

      TodoAdd({ title: todoText });
      this.setState({ todoText: '' });
    }
  }

  renderAddTodo() {
    return (
      <div style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10 }}>
        <TextField
          id="add_todo"
          placeholder="Add todo"
          margin="normal"
          fullWidth
          value={this.state.todoText}
          onChange={(event) => this.setState({ todoText: event.target.value })}
          onKeyUp={this.handleAddTodoKeyUp}
          autoFocus
        />
      </div>
    );
  }

  renderTodoList() {
    const { todos } = this.props;

    if (!todos.length) {
      return (
        <div style={{ padding: 50 }}>
          <Typography align="center" variant="display1" style={{ fontSize: 26 }}>Todo empty</Typography>
        </div>
      );
    }

    return (
      <List>
        <ReactCSSTransitionGroup
          transitionName="todoitem"
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {todos.map(todo => (
            <React.Fragment key={todo.title}>
              {this.renderTodoItem(todo)}
              <Divider />
            </React.Fragment>
          ))}
        </ReactCSSTransitionGroup>
      </List>
    );
  }

  renderTodoItem(todo) {
    const { TodoComplete, TodoUncomplete, TodoRemove } = this.props;
    return (
      <ListItem
        dense
        style={{ opacity: todo.completed ? 0.3 : 1 }}
      >
        <Checkbox
          checked={todo.completed}
          onChange={(event) => event.target.checked ? TodoComplete(todo) : TodoUncomplete(todo)}
        />
        <ListItemText primary={!todo.completed ? (<span>{todo.title}</span>) : (<strike style={{ fontStyle: 'italic' }}>{todo.title}</strike>)} />
        <ListItemSecondaryAction>
          <IconButton onClick={() => TodoRemove(todo)}>
            <Icon>clear</Icon>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }

  render() {
    return (
      <div>
        <Header title="React Todo App" />
        <div>
          {this.renderAddTodo()}
          <Divider />
          {this.renderTodoList()}
        </div>
      </div >
    );
  }
}

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  TodoAdd: PropTypes.func.isRequired,
  TodoRemove: PropTypes.func.isRequired,
  TodoComplete: PropTypes.func.isRequired,
  TodoUncomplete: PropTypes.func.isRequired,
};

export default Todo;
