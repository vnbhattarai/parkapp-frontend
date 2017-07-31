import React, { Component } from "react";
import { Route, BrowserRouter, Link, Redirect, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import HomePage from "./HomePage";
import Dashboard from "./protected/Dashboard";
import { logout } from "../helpers/auth";
import { firebaseAuth } from "../constants/firebaseConfig";
import ReservationPage from "./protected/ReservationPage";
import { MuiThemeProvider } from "material-ui/styles";
import FlatButton from "material-ui/FlatButton";
import AppBar from "material-ui/AppBar";

const styles = {
  appBar: {
    "background-color": "#2196F3"
  },
  buttonColor: {
    color: "white",
    fontSize: "200%"
  }
};

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
      ? <h3>Loading</h3>
      : <BrowserRouter>
          <div>
            <MuiThemeProvider>
              <AppBar
                title="Park App"
                style={styles.appBar}
                iconElementRight={
                  <div>
                    <FlatButton
                      label="Home"
                      style={styles.buttonColor}
                      containerElement={<Link to="/" />}
                      hoverColor="#2962FF"
                    />
                    <FlatButton
                      label="Reservation"
                      style={styles.buttonColor}
                      containerElement={<Link to="/reservation" />}
                      hoverColor="#2962FF"
                    />
                    <FlatButton
                      label="Dashboard"
                      style={styles.buttonColor}
                      containerElement={<Link to="/dashboard" />}
                      hoverColor="#2962FF"
                    />
                    {this.state.authed
                      ? <FlatButton
                          label="Logout"
                          style={styles.buttonColor}
                          containerElement={<Link to="#" />}
                          onClick={() => logout()}
                          hoverColor="#2962FF"
                        />
                      : <FlatButton>
                          <FlatButton
                            style={{ marginRight: "2px" }}
                            label="Log in"
                            style={styles.buttonColor}
                            containerElement={<Link to="/login">Log in</Link>}
                            hoverColor="#2962FF"
                          />
                          <FlatButton
                            label="Sign Up"
                            style={styles.buttonColor}
                            containerElement={<Link to="/signup" />}
                            hoverColor="#2962FF"
                          />
                        </FlatButton>}
                  </div>
                }
              />
            </MuiThemeProvider>
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
