import React, { Component } from 'react';
import logo from 'assets/images/logo.svg';

class Home extends Component {
  render() {
    return (
      <div className="home-component">
        <div className="header">
          <img src={logo} className="logo" alt="logo" />
          <h2>Welcome to ReactJS Begin</h2>
        </div>
        <p className="intro">
          To get started, edit <code>app/components/Home/index.js</code> and save to reload.
        </p>
        <p className="intro">
          The project was created by create-react-app, see more at <a href="https://github.com/facebookincubator/create-react-app">here</a>
        </p>
      </div>
    );
  }
}

export default Home;
