import React, { Component } from "react";
import { login, resetPassword } from "../helpers/auth";

function setErrorMsg(error) {
  return {
    loginMessage: error
  };
}

class Login extends Component {
  state = { loginMessage: null };
  handleSubmit = e => {
    e.preventDefault();
    login(this.email.value, this.pw.value).catch(error => {
      this.setState(setErrorMsg("Invalid username/password."));
    });
  };
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() =>
        this.setState(
          setErrorMsg(`Password reset email sent to ${this.email.value}.`)
        )
      )
      .catch(error => this.setState(setErrorMsg(`Email address not found.`)));
  };
  render() {
    return (
      <div>
        <h3> Login </h3>
        <div>
          <div className="col s12 m7">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    className="validate"
                    ref={email => (this.email = email)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="password"
                    className="validate"
                    ref={pw => (this.pw = pw)}
                    placeholder="Password"
                  />
                </div>
              </div>

              {this.state.loginMessage &&
                <div className="red-text">
                  <span
                    className="glyphicon glyphicon-exclamation-sign"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Error:</span>
                  &nbsp;{this.state.loginMessage}{" "}
                  <a
                    href="#"
                    onClick={this.resetPassword}
                    className="alert-link"
                  >
                    Forgot Password?
                  </a>
                </div>}
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
