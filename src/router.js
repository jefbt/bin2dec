import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import paths from "./config/paths";

import Home from "./pages/home";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={paths.home}
            component={Home}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;