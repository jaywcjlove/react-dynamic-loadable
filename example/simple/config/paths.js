const path = require('path');
const fs = require('fs');


// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

console.log('>>>', path.resolve(__dirname, '../public'))
console.log('>>>222', resolveApp('public'))

module.exports = {
  // Source files
  src: resolveApp('src'),

  // Production build files
  build: resolveApp('dist'),

  // Static files that get copied to build folder
  public: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appFavicon: resolveApp('public/favicon.ico'),
};
