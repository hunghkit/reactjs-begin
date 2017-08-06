import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';

export class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: {},
    };

    this.renderTask = this.renderTask.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    axios.get('/api/v1.0.0/tasks')
      .then((res) => res.data)
      .then(({ tasks }) => this.setState({ tasks: tasks.reduce((obj, item) => ({ ...obj, [item._id]: item }), {}) }))
      .catch((err) => this.setState({ message: err.toString() }))
  }

  onSuccess(task, isNew) {
    if (isNew) this.setState((pre) => ({ tasks: { [task._id]: task, ...pre.tasks } }))
    else this.setState((pre) => {
      const tasks = pre.tasks || {};
      tasks[task._id] = task;
      return tasks;
    });
  }

  onDelete(e, id) {
    e.preventDefault()
    if (window.confirm("Are you sure?")) { // eslint-disable-line
      const { tasks = {} } = this.state;
      delete tasks[id];
      this.setState({ tasks: { ...tasks } })
      fetch(`/api/v1.0.0/tasks/${id}`, { method: 'DELETE' })
    }
  }

  renderTask({ _id: id, title }, index) {
    return (
      <li key={index}>
        <div className="content">
          {title}
        </div>
        <div className="action">
          <button onClick={(e) => this.form.onTask({ title, id })} >edit</button>
          <button onClick={(e) => this.onDelete(e, id)} >delete</button>
        </div>
      </li>
    );
  }

  render() {
    const { tasks = {} } = this.state;

    return (
      <div className="task-component">
        <Form ref={(ref) => this.form = ref} onSuccess={this.onSuccess} />
        <ul>
          {Object.keys(tasks).map((key, index) => this.renderTask(tasks[key], index))}
        </ul>
      </div>
    );
  }
}

export default Task