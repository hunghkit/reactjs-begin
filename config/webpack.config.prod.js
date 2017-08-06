const client = require('./webpack.config.base.prod')({
  name: 'client',
  target: 'web',
  output: {
    filename: 'static/js/bundle.js',
  },
});

const server = require('./webpack.config.base.prod')({
  name: 'server',
  target: 'node',
  output: {
    filename: 'static/js/server.js',
    libraryTarget: 'commonjs2',
  },
});

module.exports = [client, server];
