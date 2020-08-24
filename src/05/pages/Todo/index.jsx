import React, { Component } from "react";

import AddTodo from "./components/AddTodo.jsx";
import TodoList from "./components/TodoList.jsx";
import FilterLink from "../../components/FilterLink.jsx";
import { FILTER_TYPE_MAP } from "../../constants";

class Todo extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
        {Object.keys(FILTER_TYPE_MAP).map(key => {
          const filter = FILTER_TYPE_MAP[key];
          return <FilterLink key={filter} filter={filter} />;
        })}
      </div>
    );
  }
}

export default Todo;
