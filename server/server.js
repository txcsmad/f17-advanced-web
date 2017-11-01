let express = require('express');
let webpackMiddleware = require('webpack-dev-middleware');
let webpack = require('webpack');
let path = require('path');

const config = require('../webpack.config');

const app = express();
const port = 3000;

let compiler = webpack(config);
let devMiddleware = webpackMiddleware(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  contentBase: './public',
  stats: {
    colors: true,
  }
});
app.use(devMiddleware);

app.use(require('webpack-hot-middleware')(compiler));
app.use('/', express.static(path.resolve(__dirname, '..', 'public')));

app.listen(port, () => {
  console.log('Express listening on port', port);
});
