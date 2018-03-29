

const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appBuildDist: resolveApp('dist'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  // appFavicon: resolveApp('public/favicon.png'),
  appFavicon: resolveApp('public/favicon.ico'),
  appSrc: resolveApp('src'),
}