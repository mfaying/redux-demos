import * as api from "../../apiMock";

export const SET_TODOS = "SET_TODOS";
export const SET_LOADING = "SET_LOADING";

export const setTodos = todos => {
  return {
    type: SET_TODOS,
    todos
  };
};

export const setLoading = loading => {
  return {
    type: SET_LOADING,
    loading
  };
};

export const fetchTodos = () => {
  return dispatch => {
    dispatch(setLoading(true));
    api
      .fetchTodoList()
      .then(res => {
        dispatch(setTodos(res));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
};
