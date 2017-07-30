import React, { Component } from "react";
import { Route, BrowserRouter, Link, Redirect, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import HomePage from "./HomePage";
import Dashboard from "./protected/Dashboard";
import { logout } from "../helpers/auth";
import { firebaseAuth } from "../constants/firebaseConfig";
import ReservationPage from "./protected/ReservationPage";

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true
          ? <Component {...props} />
          : <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />}
    />
  );
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false
          ? <Component {...props} />
          : <Redirect to="/Reservation" />}
    />
  );
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true
  };
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          email: user.email
        });
      } else {
        this.setState({
          authed: false,
          loading: false
        });
      }
    });
  }
  componentWillUnmount() {
    this.removeListener();
  }
  render() {
    return this.state.loading === true
      ? <h1>Loading</h1>
      : <BrowserRouter>
          <div>
            <nav className="blue darken-1">
              <div className="nav-wrapper ">
                <Link
                  to="/"
                  className="brand-logo"
                  style={{ paddingLeft: "10px" }}
                >
                  Park App
                </Link>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/reservation">Reservation</Link>
                  </li>
                  <li>
                    {this.state.authed
                      ? <li>
                          <a>
                            <button
                              style={{
                                border: "none",
                                background: "transparent"
                              }}
                              onClick={() => {
                                logout();
                              }}
                            >
                              Logout
                            </button>
                          </a>
                        </li>
                      : <ul>
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                          <li>
                            <Link to="/signup">Sign Up</Link>
                          </li>
                        </ul>}
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <PublicRoute
                    authed={this.state.authed}
                    path="/login"
                    component={LoginPage}
                  />
                  <PublicRoute
                    authed={this.state.authed}
                    path="/signup"
                    component={SignupPage}
                  />
                  <PrivateRoute
                    authed={this.state.authed}
                    user={this.state.email}
                    path="/reservation"
                    component={ReservationPage}
                  />
                  <Route render={() => <h3>No Match</h3>} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>;
  }
}
