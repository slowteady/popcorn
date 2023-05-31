import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/views/LoginPage";
import SignupPage from "./components/views/SignupPage";
import MainPage from "./components/views/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/main" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
