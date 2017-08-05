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

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Please enter a password confirmation.";
  }

  if (values.password !== values.passwordConfirmation) {
    errors.password = "Passwords do not match";
  }

  return errors;
};

class Signup extends React.Component {
  handleFormSubmit = values => {
    this.props.signUpUser(values);
  };

  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return (
        <div className="authError">
          {this.props.authenticationError}
        </div>
      );
    }
    return <div />;
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className="authForm">
            <h2>Sign Up</h2>
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
                type="password"
                label="Password"
                component={renderField}
              />
              <br />
              <Field
                name="passwordConfirmation"
                type="password"
                component={renderField}
                label="Password Confirmation"
              />
              <br />
              <br />
              <RaisedButton type="submit" label="Sign Up" primary={true} />
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
    form: "signup",
    validate
  })(Signup)
);
