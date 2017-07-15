import React from "react";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router-dom";

const NavButtons = ["Home", "Login", "Signup", "Reservation"].map(name =>
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
  <AppBar
    title="Park App"
    iconElementRight={
      <div>
        {NavButtons}
      </div>
    }
    style={{ width: "auto", margin: -8 }}
  />;

export default Header;
