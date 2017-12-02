import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Loading } from 'components/Loaders';
import 'assets/scss/theme.scss';
import Routes from './routes';

class Pages extends Component {
  static propTypes = {
    isServer: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }


  componentDidMount() {
    document.body.onload = () => this.setState({ loaded: true });
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

export default Pages;
