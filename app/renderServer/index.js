import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { matchPath } from 'react-router';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Provider } from 'react-redux';
import Template from './template';
import App from 'pages';
import routes from 'pages/routes';
import store from 'reducers/store';

const components = (routes) => {
  if (!routes.props.children) return [routes.props];
  if (!routes.props.children[0]) return [routes.props.children];
  return routes.props.children
}

const matchRoutes = (routes, location, store) =>
  Promise.all(
    components(routes)
      .filter(({ props }) => matchPath(location, props))
      .map(pre => pre.props)
      .filter(props => props.component.preRender)
      .map(props => props.component.preRender(store, location))
  );

export default (assets) =>
  (req, res, next) => {
    matchRoutes(routes(), req.url, store)
      .then(() => {
        const context = {};
        const markup = ReactDOMServer.renderToString(
          <Provider store={store} >
            <StaticRouter location={req.url} context={context}>
              <App />
            </StaticRouter>
          </Provider>
        );
        const helmet = Helmet.renderStatic();

        res.status(200).send(Template({
          markup,
          helmet,
          assets,
        }));
      })
      .catch(err => res.json(err));
  };
