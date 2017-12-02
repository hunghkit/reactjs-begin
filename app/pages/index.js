import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loading } from 'components/Loaders';
import { withRouter } from 'react-router-dom';
import axios from 'services/axios';
import 'assets/scss/theme.scss';
import { onSetCurrentUser } from 'actions/currentUser';
import Routes from './routes';

class Pages extends Component {
  static propTypes = {
    setUser: PropTypes.func,
    isServer: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentWillMount() {
    axios.get('/api/v1.0.0/auth')
        .then((res) => res.data)
        .then(({ user }) => {
          if (user) this.props.setUser(user);
        });
  }

  componentDidMount() {
    document.body.onload = () => {
      this.setState({ loaded: true });
    };
  }

  render() {
    const { loaded } = this.state;
    const { isServer } = this.props;
    if (!loaded && !isServer) return <div className="page-container loading"><Loading /></div>;

    return (
      <div className="page-container">
        <Helmet
          htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
          titleTemplate="%s | ReactJS Begin"
          titleAttributes={{ itemprop: 'name', lang: 'en' }}
          meta={[
            { name: 'description', content: 'Server side rendering with reactjs begin' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ]}
        />
        <Routes />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user = {}) => dispatch(onSetCurrentUser(user)),
});

export default withRouter(connect(null, mapDispatchToProps)(Pages));
