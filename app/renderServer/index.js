import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { matchPath } from 'react-router';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import App from 'pages';
import routes from 'pages/routes';
import store from 'reducers/store';
import Template from './template';

const components = (routesArr) => {
  if (!routesArr.props.children) return [routesArr.props];
  if (!routesArr.props.children[0]) return [routesArr.props.children];
  return routesArr.props.children;
};

const matchRoutes = (routesArr, location, storeArg) =>
  Promise.all(
    components(routesArr)
      .filter(({ props }) => matchPath(location, props))
      .map(pre => pre.props)
      .filter(props => props.component.preRender)
      .map(props => props.component.preRender(storeArg, location))
  );

export default (assets) =>
  (req, res) => {
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
