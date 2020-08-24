import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import store from "./redux";
import AppRouter from "./AppRouter.jsx";

ReactDom.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
