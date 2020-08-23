import React, { Component } from "react";

class FilterLink extends Component {
  render() {
    const { filter, visiableFilter, handleClick } = this.props;

    const style = {};
    if (filter === visiableFilter) {
      style.color = "red";
    }

    return (
      <div style={style} onClick={handleClick}>
        {filter}
      </div>
    );
  }
}

export default FilterLink;
