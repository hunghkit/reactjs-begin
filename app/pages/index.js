import React from 'react';
import Helmet from "react-helmet";
import 'assets/scss/theme.scss';
import Routes from './routes';

const Pages = () => (
  <div className="page-container">
    <Helmet
      htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
      titleTemplate="%s | ReactJS Begin"
      titleAttributes={{ itemprop: "name", lang: "en" }}
      meta={[
        {name: "description", content: "Server side rendering with reactjs begin"},
        {name: "viewport", content: "width=device-width, initial-scale=1"},
      ]}
    />
    <Routes />
  </div>
)

export default Pages;
