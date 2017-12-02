import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Input from 'components/Form/Input';
import { Button } from 'react-toolbox/lib/button';

class Form extends PureComponent {
  static propTypes = {
    reset: PropTypes.func,
    pristine: PropTypes.bool,
    message: PropTypes.string,
    submitting: PropTypes.bool,
    handleSubmit: PropTypes.func,
    mode: PropTypes.oneOf(['create', 'edit']),
  };

  render() {
    const { handleSubmit, pristine, message, reset, submitting, mode } = this.props;

    return (
      <form
        onSubmit={handleSubmit}
        className="task-form-component"
      >
        {!!message && <div className="error">{message}</div>}
        <Field
          disabled
          name="id"
          label="ID"
          type="text"
          component={Input}
        />
        <Field
          type="text"
          name="title"
          label="Task title"
          component={Input}
        />
        <div>
          <Button
            raised
            primary
            onClick={handleSubmit}
            disabled={pristine || submitting}
            label={mode === 'edit' ? 'Update' : 'Save'}
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
  form: 'task',
})(Form);
