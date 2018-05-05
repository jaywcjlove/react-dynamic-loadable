import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import load from 'loading-cli';
import 'colors-cli/toxic';
import conf from './conf/webpack.config.dev';

const compiler = webpack(conf);
const loading = load('Compiler is running...'.green).start();
loading.color = 'green';

// https://webpack.js.org/api/compiler-hooks/#aftercompile
// 编译完成之后打印日志
compiler.hooks.done.tap('done', () => {
  loading.stop();
  if (!global.rebuild) {
    console.log(`Dev Server Listening at ${'http://localhost:19421/'.green}`); // eslint-disable-line
    global.rebuild = true;
  }
});

new WebpackDevServer(compiler, {
  // contentBase: conf.output.appPublic,
  publicPath: conf.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: true,
}).listen(19421, 'localhost', (err) => {
  if (err) {
    return console.log(err); // eslint-disable-line
  }
});
