import React, { Component } from "react";
import TextField from "material-ui/TextField";
import { MuiThemeProvider } from "material-ui/styles";
import RaisedButton from "material-ui/RaisedButton";
import client from "../constants/feathers";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateField(name, ev) {
    this.setState({ [name]: ev.target.value });
  }

  login() {
    const { email, password } = this.state;

    return client
      .authenticate({
        strategy: "local",
        email,
        password
      })
      .catch(error => this.setState({ error }));
  }
  signup() {
    const { email, password } = this.state;

    return client
      .service("users")
      .create({ email, password })
      .then(() => this.login());
  }

  render() {
    return (
      <MuiThemeProvider>
        <form className="authform">
          <TextField
            type="email"
            name="email"
            floatingLabelText="Email"
            onChange={ev => this.updateField("email", ev)}
          />

          <TextField
            type="password"
            name="password"
            floatingLabelText="Password"
          />

          <TextField
            type="password"
            name="password"
            floatingLabelText="Confirm Password"
            onChange={ev => this.updateField("password", ev)}
          />

          <RaisedButton
            type="button"
            primary={true}
            label="Sign Up"
            style={{ marginTop: 10 }}
            onClick={() => this.login()}
          />
        </form>
      </MuiThemeProvider>
    );
  }
}

export default SignupPage;
