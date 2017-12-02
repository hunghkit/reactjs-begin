import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'services/axios';
import { connect } from 'react-redux';
import TaskForm from 'components/Form/Task';
import { change as changeFieldValue } from 'redux-form';

export class Form extends Component {
  static propTypes = {
    onSuccess: PropTypes.func,
    changeFieldValue: PropTypes.func,
  };

  static defaultProps = {
    onSuccess: () => {},
    changeFieldValue: () => {},
  };

  constructor(props) {
    super(props);
    this.state = { message: '' };
    this.onTask = this.onTask.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTask(task = {}) {
    Object.entries(task).forEach((item) => this.props.changeFieldValue(...item));
  }

  onSubmit({ title, id }) {
    let url = '/api/v1.0.0/tasks/';
    let method = 'post';
    let isNew = true;

    if (id) {
      url += id;
      method = 'put';
      isNew = false;
    }

    this.setState({ message: '' });

    axios[method](url, { task: { title } })
      .then((res) => res.data)
      .then(({ task, success, message }) => {
        if (success) {
          this.props.onSuccess(task, isNew);
          this.form.reset();
        } else this.setState({ message });
      })
      .catch((err) => this.setState({ message: err.toString() }));
  }

  render() {
    const { message } = this.state;
    return <TaskForm ref={(ref) => (this.form = ref)} onSubmit={this.onSubmit} message={message} />;
  }
}

const dispatchToProps = (dispatch) => ({
  changeFieldValue: (field, value) => dispatch(changeFieldValue('task', field, value)),
});

export default connect(null, dispatchToProps, null, { withRef: true })(Form);
