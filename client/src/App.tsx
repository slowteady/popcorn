import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/views/LoginPage";
import SignUpPage from "./components/views/SignUpPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/signup" component={SignUpPage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
