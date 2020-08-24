import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo } from "../../../redux/actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  render() {
    const { addTodo } = this.props;

    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button
          onClick={() => {
            addTodo(this.inputRef.current.value);
          }}
        >
          add
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => {
      dispatch(addTodo(todo));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
