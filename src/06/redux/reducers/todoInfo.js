import { SET_TODOS, SET_LOADING } from "../actions";

const todoInfo = (
  state = {
    todos: [],
    loading: false
  },
  action
) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: [...action.todos] };
    case SET_LOADING:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

export default todoInfo;
