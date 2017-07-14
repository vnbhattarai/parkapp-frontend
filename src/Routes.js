import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./containers/LoginPage";
import ReservationPage from "./containers/ReservationPage";

const Routes = () =>
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/login" component={LoginPage} />
    <Route path="/reservation" component={ReservationPage} />
  </Switch>;

export default Routes;
