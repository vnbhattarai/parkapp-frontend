import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Application from "./App";
import LoginPage from "./containers/LoginPage";
import ReservationPage from "./containers/ReservationPage";
import Header from "./components/Header";
import SignupPage from "./containers/SignupPage";

const Routes = () =>
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Application} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/reservation" component={ReservationPage} />
      </Switch>
    </div>
  </BrowserRouter>;

export default Routes;
