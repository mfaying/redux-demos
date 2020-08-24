import React from "react";
import { Route, HashRouter } from "react-router-dom";

import Todo from "./pages/Todo/index.jsx";

function AppRouter() {
  return (
    <HashRouter>
      <Route path="/" component={Todo} />
    </HashRouter>
  );
}

export default AppRouter;
