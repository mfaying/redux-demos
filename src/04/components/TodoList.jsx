import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleTodo } from "../redux/actions";
import { FILTER_TYPE_MAP } from "../constants";

class TodoList extends Component {
  render() {
    const { todos, toggleTodo } = this.props;

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

const getFilterTodos = (todos, visiableFilter) => {
  switch (visiableFilter) {
    case FILTER_TYPE_MAP.SHOW_ALL:
      return todos;
    case FILTER_TYPE_MAP.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case FILTER_TYPE_MAP.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error("unknow filter type");
  }
};

const mapStateToProps = state => {
  const { todos, visiableFilter } = state;
  return {
    todos: getFilterTodos(todos, visiableFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => {
      dispatch(toggleTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
