import React, { Component } from 'react';
import logo from 'assets/images/banner.png';
import Task from 'components/Task';
import axios from 'services/axios';
import Helmet from 'react-helmet';
import { onAddTasks } from 'actions/task';

class Home extends Component {
  static preRender(store) {
    return store.dispatch(onAddTasks());
  }

  constructor(props) {
    super(props);

    this.state = {
      message: 'Welcome to ReactJS Begin',
    };
  }

  componentWillMount() {
    axios.get('/api/v1.0.0/connected')
      .then((res) => res.data)
      .then(({ message }) => this.setState({ message }))
      .catch((err) => this.setState({ message: err.toString() }));
  }

  render() {
    const { message } = this.state;

    return (
      <div className="home-component">
        <Helmet
          title="Homepage of reactjs begin"
          meta={[
            { name: 'description', content: 'Start project reactjs and node on in one. Rerender server support for seo on reactjs' },
            { name: 'keyword', content: 'reactjs, redux, render server, nodejs' },
          ]}
        />
        <div className="header">
          <img src={logo} className="logo" alt="logo" />
          <h2>{message}</h2>
        </div>
        <p className="intro">
          To get started <a href="https://github.com/hunghkit/reactjs-begin">click here</a>
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
