import React, { Component } from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./redux/reducers/index.js";
import AddTodo from "./components/AddTodo.jsx";
import TodoList from "./components/TodoList.jsx";
import FilterLink from "./components/FilterLink.jsx";
import { FILTER_TYPE_MAP } from "./constants";

const store = createStore(rootReducer);

class App extends Component {
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

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
