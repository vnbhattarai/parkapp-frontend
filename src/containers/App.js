import React, { Component } from "react";
import { Route, BrowserRouter, Link, Redirect, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import HomePage from "./HomePage";
import Dashboard from "./protected/Dashboard";
import { logout } from "../helpers/auth";
import { firebaseAuth } from "../constants/firebaseConfig";
import ReservationPage from "./protected/ReservationPage";

function PrivateRoute({ component: Component, authed, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true
          ? <Component {...props} user={user} />
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
          : <Redirect to="/reservation" />}
    />
  );
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
    user: ""
  };
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          user: user.email
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
                      ? <ul>
                          <li>
                            <Link to="/dashboard">Dashboard</Link>
                          </li>
                          <li>
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
                        </ul>
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
                    path="/reservation"
                    user={this.state.user}
                    component={ReservationPage}
                    // render={props => <ReservationPage {...props} user="test" />}
                  />
                  <PrivateRoute
                    authed={this.state.authed}
                    path="/dashboard"
                    user={this.state.user}
                    component={Dashboard}
                  />
                  <Route render={() => <h3>No Match</h3>} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>;
  }
}
