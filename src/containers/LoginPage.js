import React, { Component } from "react";
import App from "../constants/feathers";
import { MuiThemeProvider } from "material-ui/styles";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  //   componentDidMount() {
  //     const reservations = App.service("reservations");
  //     const users = App.service("users");

  // Try to authenticate with the JWT stored in localStorage;
  login(e) {
    e.preventDefault();
    console.log(this);

    App.authenticate({
      strategy: "local",
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        console.log("Authenticated!", response);
        return App.passport.verifyJWT(response.accessToken);
      })
      .then(payload => {
        console.log("JWT Payload", payload);
        return App.service("users").get(payload.userId);
      })
      .then(user => {
        App.set("user", user);
        console.log("User", App.get("user"));
        this.setState({});
      })
      .catch(function(error) {
        console.error("Error authenticating!", error);
        this.setState({ login: null });
      });
  }

  logout(e) {
    e.preventDefault();
    App.logout().then(console.log(`You've been logged out !!`));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <form className="authform" onSubmit={this.login}>
            <div className="input-field">
              <TextField
                type="email"
                name="email"
                floatingLabelText="Email"
                onChange={this.handleEmailChange}
                value={this.state.email}
              />
            </div>

            <div>
              <TextField
                type="password"
                name="password"
                floatingLabelText="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>
            <div>
              <RaisedButton
                type="submit"
                primary={true}
                label="Sign In"
                style={{ marginTop: 10 }}
              />
            </div>
          </form>

          <div style={{ marginTop: 20, textAlign: "center" }}>
            <RaisedButton className="btn" type="button" onClick={this.logout}>
              Log out
            </RaisedButton>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default LoginPage;
