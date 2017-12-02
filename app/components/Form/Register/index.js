import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Input from 'components/Form/Input';
import { Button } from 'react-toolbox/lib/button';
import { validate } from './validate';

class Form extends PureComponent {
  static propTypes = {
    reset: PropTypes.func,
    pristine: PropTypes.bool,
    message: PropTypes.string,
    submitting: PropTypes.bool,
    handleSubmit: PropTypes.func,
  };

  render() {
    const { handleSubmit, pristine, message, reset, submitting } = this.props;

    return (
      <form
        onSubmit={handleSubmit}
        className="register-form-components form-shared"
      >
        <h1>Register</h1>
        <p>Already have an account? <Link to="/login">Login</Link></p>
        {!!message && <div className="error">{message}</div>}
        <Field
          type="text"
          name="name"
          label="Name"
          component={Input}
        />
        <Field
          type="text"
          name="username"
          label="Username"
          component={Input}
        />
        <Field
          type="password"
          name="password"
          label="Password"
          component={Input}
        />
        <Field
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          component={Input}
        />
        <div className="btn-group">
          <Button
            raised
            primary
            label="Register"
            onClick={handleSubmit}
            disabled={pristine || submitting}
          />
          <Button
            raised
            accent
            label="Cancel"
            onClick={reset}
            disabled={pristine || submitting}
          />
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'register',
  validate,
})(Form);
