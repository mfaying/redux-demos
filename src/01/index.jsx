import { createStore } from "redux";

// reducer是一个纯函数，用于描述action如何改变state
function counter(state = 0, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
}

// 使用redux中的createStore api创建Store
const Store = createStore(counter);

// Store提供了getState获取state
console.log(Store.getState()); //0

// 通过Store的dispatch方法分发一个action
Store.dispatch({
  type: "INCREASE"
});

console.log(Store.getState()); //1

Store.dispatch({
  type: "DECREASE"
});

console.log(Store.getState()); //0

// 文档元素绑定上点击事件，会在DOM章节中介绍
document.addEventListener(
  "click",
  function() {
    Store.dispatch({
      type: "INCREASE"
    });
  },
  false
);

function render() {
  document.body.innerHTML = "<h1>" + Store.getState() + "</h1>";
}

//订阅事件
render();

// subscribe用于添加监听函数，每一次分发action都会把监听函数执行一遍
Store.subscribe(render);
