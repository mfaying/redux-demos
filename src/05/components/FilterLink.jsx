import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class FilterLink extends Component {
  render() {
    const { filter, match } = this.props;
    const { params } = match;

    const style = {};
    if (params.filter === filter) {
      style.color = "red";
    }

    return (
      <div>
        <Link to={filter} style={style}>
          {filter}
        </Link>
      </div>
    );
  }
}

export default withRouter(FilterLink);
