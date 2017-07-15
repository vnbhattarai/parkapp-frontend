import React from "react";
import Header from "../components/Header";
import { MuiThemeProvider } from "material-ui/styles";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const Login = () =>
  <div>
    <TextField hintText="Email" floatingLabelText="Email" />
    <br />
    <TextField hintText="Password" floatingLabelText="Password" />
    <br />
    <RaisedButton primary={true} label="Sign In" />{" "}
  </div>;

const LoginPage = () =>
  <MuiThemeProvider>
    <div>
      <Header />
      <Login />
    </div>
  </MuiThemeProvider>;

export default LoginPage;
