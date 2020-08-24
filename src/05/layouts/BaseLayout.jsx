import React, { Component } from "react";

import FilterLink from "../components/FilterLink.jsx";
import { FILTER_TYPE_MAP } from "../constants";

class Home extends Component {
  render() {
    return (
      <div>
        <FilterLink filter={FILTER_TYPE_MAP.SHOW_ALL} />
      </div>
    );
  }
}

export default Home;
