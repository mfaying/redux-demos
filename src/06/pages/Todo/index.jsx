import React, { Component } from "react";
import { Button } from "zent";

import TodoList from "./components/TodoList.jsx";

class Todo extends Component {
  render() {
    return (
      <div>
        <TodoList />
        <Button
          onClick={() => {
            console.log("cc");
          }}
        >
          cc
        </Button>
      </div>
    );
  }
}

export default Todo;
