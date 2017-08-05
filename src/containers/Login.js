import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import * as Actions from "../actions";
import { MuiThemeProvider } from "material-ui/styles";
import RaisedButton from "material-ui/RaisedButton";
import { renderField } from "../helpers/FormRender";

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }
  return errors;
};

class Login extends React.Component {
  handleFormSubmit = values => {
    this.props.signInUser(values);
  };

  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return (
        <span className="authError">
          {this.props.authenticationError}
        </span>
      );
    }
    return <div />;
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="authForm">
          <div>
            <h2>Log In</h2>
            {this.renderAuthenticationError()}
            <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
              <Field
                name="email"
                type="email"
                label="Email"
                component={renderField}
              />
              <br />
              <Field
                name="password"
                component={renderField}
                type="password"
                label="Password"
              />
              <br />
              <RaisedButton type="submit" label="Sign In" primary={true} />
            </form>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticationError: state.auth.error
  };
}

export default connect(mapStateToProps, Actions)(
  reduxForm({
    form: "login",
    validate
  })(Login)
);
