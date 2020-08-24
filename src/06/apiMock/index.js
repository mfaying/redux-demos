import { v4 } from "node-uuid";

const todoList = [
  {
    id: v4(),
    text: 1,
    completed: false
  },
  {
    id: v4(),
    text: 2,
    completed: true
  }
];

exports.fetchTodoList = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(todoList);
    }, 2000);
  });
};
