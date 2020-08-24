import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { toggleTodo } from "../../../redux/actions";
import { FILTER_TYPE_MAP } from "../../../constants";

class TodoList extends Component {
  getFilterTodos = (todos, visiableFilter) => {
    switch (visiableFilter) {
      case FILTER_TYPE_MAP.SHOW_ALL:
        return todos;
      case FILTER_TYPE_MAP.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
      case FILTER_TYPE_MAP.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  };
  render() {
    const { toggleTodo, match } = this.props;
    let { todos } = this.props;
    const { params } = match;

    todos = this.getFilterTodos(todos, params.filter);

    return (
      <ul>
        {todos.map(todo => (
          <li
            style={{
              textDecoration: todo.completed ? "line-through" : "none"
            }}
            key={todo.id}
            onClick={() => {
              toggleTodo(todo.id);
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const { todos } = state;
  return {
    todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => {
      dispatch(toggleTodo(id));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TodoList)
);
