import React, { Component } from "react";
import Header from "./components/Header";
import { MuiThemeProvider } from "material-ui/styles";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>
        <Nav />
      </div>
    );
  }
}

export default App;
