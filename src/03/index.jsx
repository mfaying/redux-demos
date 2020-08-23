import React, { Component } from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";

import rootReducer from "./reducers/index.js";
import FilterLink from "./FilterLink.jsx";

const Store = createStore(rootReducer);

const FILTER_TYPE_MAP = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

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

class App extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    const state = Store.getState();
    let { todos, visiableFilter } = state;

    todos = getFilterTodos(todos, visiableFilter);

    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button
          onClick={() => {
            Store.dispatch({
              type: "ADD_TODO",
              text: this.inputRef.current.value
            });
          }}
        >
          add
        </button>
        <ul>
          {todos.map(todo => (
            <li
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
              key={todo.id}
              onClick={() => {
                Store.dispatch({
                  type: "TOGGLE_TODO",
                  id: todo.id
                });
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
        {Object.keys(FILTER_TYPE_MAP).map(key => {
          const filter = FILTER_TYPE_MAP[key];
          return (
            <FilterLink
              key={filter}
              filter={filter}
              visiableFilter={visiableFilter}
              handleClick={() => {
                Store.dispatch({
                  type: "SET_VISIABLE_FILTER",
                  filter
                });
              }}
            />
          );
        })}
      </div>
    );
  }
}

const render = () => {
  ReactDom.render(<App />, document.getElementById("root"));
};

render();
Store.subscribe(render);
