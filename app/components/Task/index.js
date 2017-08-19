import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onAddTasks, onRemoveTask } from 'actions/task';
import Form from './Form';

export class Task extends Component {
  constructor(props) {
    super(props);
    this.renderTask = this.renderTask.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount() {
    this.props.onAddTasks();
  }

  onSuccess(task, isNew) {
    this.props.onAddTasks({ [task._id]: task, ...this.props.tasks });
  }

  onDelete(e, id) {
    e.preventDefault()
    if (window.confirm("Are you sure?")) { // eslint-disable-line
      this.props.onRemoveTask(id);
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
    const { tasks = {} } = this.props;

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


const mapStateToProps = ({ tasks }) => ({ tasks });

const mapDispatchToProps = (dispatch) => ({
  onAddTasks: (tasks) => dispatch(onAddTasks(tasks)),
  onRemoveTask: (id) => dispatch(onRemoveTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
