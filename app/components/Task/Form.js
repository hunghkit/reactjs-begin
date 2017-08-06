import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Form extends Component {
  static propTypes = {
    onSuccess: PropTypes.func,
  };

  static defaultProps = {
    onSuccess: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      id: null,
      error: '',
    };

    this.onTask = this.onTask.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTask(task) {
    this.setState({ ...task, error: '' });
  }

  onSubmit(e) {
    e.preventDefault();
    const { id, title } = this.state;
    let url = '/api/v1.0.0/tasks/';
    let method = 'POST';
    let isNew = true;
    if (id) {
      url += id;
      method = 'PUT';
      isNew = false;
    }

    this.setState({ error: '' });

    fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task: { title } })
      })
      .then((res) => res.json())
      .then(({ task, success, message }) => {
        if(success) {
          this.setState({ title: '' });
          this.props.onSuccess(task, isNew);
        } else this.setState({ error: message })
      })
      .catch((err) => this.setState({ error: err.toString() }))
  }

  render() {
    const { title, id, error } = this.state;
    const button = !id ? 'Add' : 'Edit';

    return (
      <form className="task-form-component" onSubmit={this.onSubmit}>
        {!!error && <div className="error">{error}</div>}

        <input
          required
          name="title"
          value={title || ''}
          ref={(ref) => this.title = ref}
          onChange={(e) => this.setState({ title: e.target.value })}
        />
        <button type="submit">{button}</button>
        <button onClick={() => this.setState({ title: '', id: '', error: '' })}>X</button>
      </form>
    );
  }
}

export default Form;
