import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./components/views/LoginPage";
import MainPage from "./components/views/MainPage";
import SignupPage from "./components/views/SignupPage";
import Auth from "./hoc/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/main" component={Auth(MainPage)} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
