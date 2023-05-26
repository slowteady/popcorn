import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/views/LoginPage";
import SignupPage from "./components/views/SignupPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
