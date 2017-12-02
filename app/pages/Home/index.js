import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from 'assets/images/banner.png';
import Task from 'components/Task';
import Helmet from 'react-helmet';
import { onAddTasks } from 'actions/task';
import { isAuth } from 'services/isAuth';

class Home extends Component {
  static preRender(store) {
    return store.dispatch(onAddTasks());
  }

  static propTypes = {
    setUser: PropTypes.func,
    currentUser: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome to ReactJS Begin',
    };
  }

  render() {
    const { message } = this.state;
    const { currentUser = {}, setUser = () => {} } = this.props;

    return (
      <div className="home-pages">
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
          <h2>{currentUser.username} <button onClick={() => setUser()}>logout</button></h2>
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

export default isAuth(Home);
