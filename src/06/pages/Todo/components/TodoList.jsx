import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchTodos } from "../../../redux/actions";

class TodoList extends Component {
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }
  render() {
    const { todoInfo } = this.props;
    const { todos, loading } = todoInfo;

    if (loading) {
      return <div>loading...</div>;
    }

    return (
      <ul>
        {todos.map(todo => (
          <li
            style={{
              textDecoration: todo.completed ? "line-through" : "none"
            }}
            key={todo.id}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const { todoInfo } = state;
  return {
    todoInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => {
      dispatch(fetchTodos());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
