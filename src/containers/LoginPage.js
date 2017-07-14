import React, { Component } from "react";
import HeaderWithStyles from "../components/Header";
import { MuiThemeProvider } from "material-ui/styles";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <HeaderWithStyles />
        </MuiThemeProvider>
        <div>This is Login Page</div>
      </div>
    );
  }
}

export default LoginPage;
