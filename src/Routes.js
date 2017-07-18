import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./containers/LoginPage";
import ReservationPage from "./containers/ReservationPage";
import Header from "./components/Header";
import SignupPage from "./containers/SignupPage";

const Routes = () =>
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={LoginPage} />
      <Route path="/reservation" component={ReservationPage} />
      <Route path="/signup" component={SignupPage} />
    </Switch>
  </div>;

export default Routes;
