import React from "react";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import urls from "../../routes.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path={urls.home} component={HomePage} />
      <Route path={urls.login} component={LoginPage} />
    </Switch>
  </Router>
);

export default App;
