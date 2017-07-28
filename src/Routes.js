import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Application from "./App";
import LoginPage from "./containers/LoginPage";
import ReservationPage from "./containers/ReservationPage";
import Header from "./components/Header";
import SignupPage from "./containers/SignupPage";
import Dashboard from "./containers/Dashboard";

const Auth = {
  isAuthenticated: true
};

const PrivateRoute = ({ component: Component, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      Auth.isAuthenticated
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />}
  />;

const Routes = () =>
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={Application} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/reservation" component={ReservationPage} />
      </Switch>
    </div>
  </BrowserRouter>;

export default Routes;
// <Route exact path="/" component={Application} />
