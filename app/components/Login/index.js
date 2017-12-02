import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'services/axios';
import Form from 'components/Form/Login';
import { onSetCurrentUser } from 'actions/currentUser';

class Login extends Component {
  static propTypes = {
    setUser: PropTypes.func,
    history: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = { mgs: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({ mgs: '' });
  }

  onSubmit(user) {
    axios.post('/api/v1.0.0/auth', { user })
      .then((res) => res.data)
      .then(({ success, message, user: newUser = {} }) => {
        if (!success) return this.setState({ mgs: message });
        this.props.setUser(newUser);
        return this.props.history.push('/');
      })
      .catch((err) => this.setState({ mgs: err.toString() }));
  }

  render() {
    const { mgs = '' } = this.state;

    return (
      <div className="login-components">
        <Helmet
          title="Login"
          meta={[
            { name: 'description', content: 'Login page to reactjs begin' },
          ]}
        />
        <Form onSubmit={this.onSubmit} message={mgs} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user = {}) => dispatch(onSetCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(withRouter(Login));
