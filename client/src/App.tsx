import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/views/LoginPage";
import SignupPage from "./components/views/SignupPage";
import MainPage from "./components/views/MainPage";
import Auth from "./hoc/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={() => Auth(SignupPage)} />
        <Route exact path="/main" component={() => Auth(MainPage)} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
