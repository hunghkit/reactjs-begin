import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onAddTasks, onRemoveTask } from 'actions/task';
import { IconButton } from 'react-toolbox/lib/button';
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';

import Form from './Form';

export class Task extends Component {
  static propTypes = {
    tasks: PropTypes.object,
    onAddTasks: PropTypes.func,
    onRemoveTask: PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.renderTask = this.renderTask.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  componentWillMount() {
    this.props.onAddTasks();
  }

  onSuccess(newTask = {}) {
    const { _id: id } = newTask;
    const { tasks = {} } = this.props;
    const task = { ...(tasks[id] || {}), ...newTask };
    if (tasks[id]) delete tasks[id];

    this.props.onAddTasks({ [id]: task, ...this.props.tasks }); //eslint-disable-line
  }

  onDelete(e, id) {
    e.preventDefault();
    if (window.confirm("Are you sure?")) { // eslint-disable-line
      this.props.onRemoveTask(id);
    }
  }

  onEdit(e, task) {
    e.preventDefault();
    this.form.getWrappedInstance().onTask(task);
  }

  renderTask({ _id: id, title }, index) {
    return (
      <ListItem
        key={index}
        className="item"
        itemContent={<div className="content">{title}</div>}
        rightActions={[
          <IconButton
            primary
            key="edit"
            icon="border_color"
            onClick={(e) => this.onEdit(e, { id, title })}
          />,
          <IconButton
            accent
            key="delete"
            icon="delete_forever"
            onClick={(e) => this.onDelete(e, id)}
          />,
        ]}
      />
    );
  }

  render() {
    const { tasks = {} } = this.props;
    const hasTask = Object.keys(tasks).length > 0;

    return (
      <div className="task-component">
        <Form ref={(ref) => this.form = ref} onSuccess={this.onSuccess} />
        { hasTask &&
          <List>
            <ListSubHeader caption="Tasks on list" />
            <ListDivider />
            {Object.keys(tasks).map((key, index) => this.renderTask(tasks[key], index))}
          </List>
        }
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
