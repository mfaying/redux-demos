import React, { Component } from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
}

const Store = createStore(counter);

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{Store.getState()}</h1>
        <button
          onClick={() => {
            Store.dispatch({
              type: "INCREASE"
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            Store.dispatch({
              type: "DECREASE"
            });
          }}
        >
          -
        </button>
      </div>
    );
  }
}

function render() {
  ReactDom.render(<Counter />, document.getElementById("root"));
}

render();
Store.subscribe(render);
