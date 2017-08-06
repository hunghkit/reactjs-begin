import React, { Component } from 'react';
import logo from 'assets/images/logo.svg';
import Task from 'components/Task';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Welcome to ReactJS Begin'
    };
  }

  componentWillMount() {
    fetch('/api/v1.0.0/connected')
      .then((res) => res.json())
      .then(({ message }) => this.setState({ message }))
      .catch((err) => this.setState({ message: err.toString() }))
  }

  render() {
    const { message } = this.state;

    return (
      <div className="home-component">
        <div className="header">
          <img src={logo} className="logo" alt="logo" />
          <h2>{message}</h2>
        </div>
        <p className="intro">
          To get started, edit <code>app/components/Home/index.js</code> and save to reload.
        </p>
        <p className="intro">
          The project was created by create-react-app, see more at <a href="https://github.com/facebookincubator/create-react-app">here</a>
        </p>
        <Task />
      </div>
    );
  }
}

export default Home;
