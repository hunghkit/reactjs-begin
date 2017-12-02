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
        className="login-form-components form-shared"
      >
        <h1>Login</h1>
        <p>Dont have an account? <Link to="/register">Register</Link></p>
        {!!message && <div className="error">{message}</div>}
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
        <div className="btn-group">
          <Button
            raised
            primary
            label="Login"
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
  form: 'login',
  validate,
})(Form);
