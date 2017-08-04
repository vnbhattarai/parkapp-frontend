import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Actions from "../actions";
import { MuiThemeProvider } from "material-ui/styles";
import FlatButton from "material-ui/FlatButton";
import AppBar from "material-ui/AppBar";

const styles = {
  appBar: {
    backgroundColor: "#2196F3"
  },
  buttonColor: {
    color: "white",
    fontSize: "200%"
  }
};

class Header extends React.Component {
  handleSignout() {
    this.props.signOutUser();
  }

  render() {
    return (
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
              {this.props.authenticated
                ? <FlatButton
                    label="Logout"
                    style={styles.buttonColor}
                    containerElement={<Link to="#" />}
                    onClick={() => this.handleSignout()}
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
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, Actions)(Header);
