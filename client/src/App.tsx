import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./components/views/LoginPage";
import MainPage from "./components/views/MainPage";
import SignupPage from "./components/views/SignupPage";
import Auth from "./hoc/Auth";
import Page404 from "./components/views/Page404";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/404" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
