const visiableFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIABLE_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visiableFilter;
