import React from "react";
import AppBar from "material-ui/AppBar";
import { MuiThemeProvider } from "material-ui/styles";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router-dom";

const NavButtons = ["Login", "Signup", "Reservation"].map(name =>
  <FlatButton
    containerElement={<Link to={`${name}`.toLowerCase()} />}
    label={`${name}`}
    style={{
      backgroundColor: "transparent",
      color: "white",
      margin: 5
    }}
  />
);

const Header = () =>
  <MuiThemeProvider>
    <AppBar
      title="Park App"
      iconElementRight={
        <div>
          <FlatButton
            containerElement={<Link to="/" />}
            label={"Home"}
            style={{
              backgroundColor: "transparent",
              color: "white",
              margin: 5
            }}
          />
          {NavButtons}
        </div>
      }
      style={{ width: "auto", margin: -8, marginBottom: 15 }}
    />
  </MuiThemeProvider>;

export default Header;
