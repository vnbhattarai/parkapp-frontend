import React, { Component } from "react";
import { auth } from "../helpers/auth";

function setErrorMsg(error) {
  return {
    registerError: error.message
  };
}

export default class SignupPage extends Component {
  state = { registerError: null };
  handleSubmit = e => {
    e.preventDefault();
    auth(this.email.value, this.pw.value).catch(e =>
      this.setState(setErrorMsg(e))
    );
  };
  render() {
    return (
      <div>
        <h3>Sign Up</h3>
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

              {this.state.registerError &&
                <div className="red-text">
                  <span
                    className="glyphicon glyphicon-exclamation-sign"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Error:</span>
                  &nbsp;{this.state.registerError}
                </div>}
              <button type="submit" className="btn">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
