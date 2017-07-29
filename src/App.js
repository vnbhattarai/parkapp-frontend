import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import ReservationPage from "./containers/ReservationPage";
import Header from "./components/Header";
import SignupPage from "./containers/SignupPage";
import Dashboard from "./containers/Dashboard";
import checkAuth from "./constants/checkAuth";

const PrivateRoute = ({ component: Component, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      checkAuth()
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />}
  />;

// <Route exact path="/" component={Application} />

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <PrivateRoute path="/reservation" component={ReservationPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
