const redirects = require('./config/redirects');

module.exports = {
  trailingSlash: true,
  async redirects() {
    return redirects;
  },
};
