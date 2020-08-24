export const addTodo = todo => {
  return {
    type: "ADD_TODO",
    text: todo
  };
};

export const toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};

export const setVisiableFilter = filter => {
  return {
    type: "SET_VISIABLE_FILTER",
    filter
  };
};
