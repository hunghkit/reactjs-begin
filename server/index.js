/* eslint no-console: 0 */
require('babel-register');
require('babel-polyfill');

const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const RoutesV1 = require('./api/v1.0.0/routes');

const isDeveloping = process.env.NODE_ENV !== 'production';
const secret = process.env.SECRET || 'CRBeL8o5JZsLOG4OFcjqWpr';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(session({ secret, resave: false, saveUninitialized: true }))
app.use(express.static(path.join(__dirname, '../build/')));

/** Config routers */
app.use('/api/v1.0.0', RoutesV1)
app.use('/api/v1.0.0/connected', (req, res) => {
  res.json({ message: 'Connected api' });
});

if (!isDeveloping) {
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'))
  })
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
