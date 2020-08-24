import React from "react";
import { Route, HashRouter } from "react-router-dom";

import BaseLayout from "./layouts/BaseLayout.jsx";
import Todo from "./pages/Todo/index.jsx";

function AppRouter() {
  return (
    <HashRouter>
      <Route exac path="/" component={BaseLayout} />
      <Route exac path="/:filter" component={Todo} />
    </HashRouter>
  );
}

export default AppRouter;
