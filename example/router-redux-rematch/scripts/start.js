import webpack from 'webpack';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import apiMocker from 'mocker-api';
import load from 'loading-cli';
import 'colors-cli/toxic';
import conf from './conf/webpack.config.dev';

const compiler = webpack(conf);
const loading = load('Compiler is running...'.green).start();
loading.color = 'green';

// https://webpack.js.org/api/compiler-hooks/#aftercompile
// 编译完成之后打印日志
compiler.hooks.done.tap('done', (err) => {
  loading.stop();
  if (err.hasErrors) {
    // console.log('err:', Object.keys(err));
    // console.log('err:', err);
    if (err.compilation.errors.length > 0) {
      // eslint-disable-next-line no-console
      console.log('Errors::', err.compilation.errors.join('\n'));
    }
    if (err.compilation.warnings.length > 0) {
      // eslint-disable-next-line no-console
      console.log('warnings::', err.compilation.warnings.join('\n'));
    }
  }
  if (!global.rebuild) {
    // eslint-disable-next-line no-console
    console.log(`Dev Server Listening at ${'http://localhost:19421/'.green}`);
    global.rebuild = true;
  }
});

new WebpackDevServer(compiler, {
  // contentBase: conf.output.appPublic,
  publicPath: conf.output.publicPath,
  hot: true,
  before(app) {
    apiMocker(app, path.resolve('./mocker/index.js'), {
      // 'GET /api/user/list': 'http://localhost:3000',
    });
  },
  historyApiFallback: true,
  quiet: true,
}).listen(19421, 'localhost', (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
});
