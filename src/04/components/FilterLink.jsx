import React, { Component } from "react";
import { connect } from "react-redux";

import { setVisiableFilter } from "../redux/actions";

class FilterLink extends Component {
  render() {
    const { filter, visiableFilter, setVisiableFilter } = this.props;

    const style = {};
    if (filter === visiableFilter) {
      style.color = "red";
    }

    return (
      <div
        style={style}
        onClick={() => {
          setVisiableFilter(filter);
        }}
      >
        {filter}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { visiableFilter } = state;
  return {
    visiableFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setVisiableFilter: filter => {
      dispatch(setVisiableFilter(filter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
