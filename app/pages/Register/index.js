import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import axios from 'services/axios';
import Form from 'components/Form/Register';

class Register extends Component {
  static propTypes = {
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
    axios.post('/api/v1.0.0/auth/register', { user })
      .then((res) => res.data)
      .then(({ success, message }) => {
        success ? this.props.history.push('/login') : this.setState({ mgs: message });
      })
      .catch((err) => this.setState({ mgs: err.toString() }));
  }

  render() {
    const { mgs = '' } = this.state;

    return (
      <div className="register-pages">
        <Helmet
          title="Register"
          meta={[
            { name: 'description', content: 'register page to reactjs begin' },
          ]}
        />
        <Form onSubmit={this.onSubmit} message={mgs} />
      </div>
    );
  }
}

export default Register;
