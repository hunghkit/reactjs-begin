/* eslint no-console: 0 */
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookiesMiddleware from 'universal-cookie-express';

import RoutesV1 from './api/v1.0.0/routes';

const app = express();
const port = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';
const secret = process.env.SECRET || 'CRBeL8o5JZsLOG4OFcjqWpr';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(session({ secret, resave: false, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, '../build/'), { index: false }));

/** Config routers */
RoutesV1(app);

app.use('/api/v1.0.0/connected', (req, res) => {
  res.json({ message: 'Connected api' });
});

if (isProd) {
  const ClientAsset = path.join(__dirname, '../build/asset-manifest.json');
  const ServerRendererPath = path.join(__dirname, '../build/static/js/server.js');
  const ServerRenderer = require(ServerRendererPath).default;
  const Stats = require(ClientAsset);

  app
    .use(cookiesMiddleware())
    .use(ServerRenderer(Stats));
}

app.listen(port, '0.0.0.0', (err) => {
  if (err) console.log(err);
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
