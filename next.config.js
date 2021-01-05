module.exports = (phase) => {
  return {
    env: {
      PORT: process.env.PORT,
      REGION: process.env.REGION,
      IDP_DOMAIN: process.env.IDP_DOMAIN,
      USER_POOL_ID: process.env.USER_POOL_ID,
      USER_POOL_CLIENT_ID: process.env.USER_POOL_CLIENT_ID,
      REDIRECT_SIGN_IN: process.env.REDIRECT_SIGN_IN,
      REDIRECT_SIGN_OUT: process.env.REDIRECT_SIGN_OUT,
      AUTH_COOKIE_DOMAIN: process.env.AUTH_COOKIE_DOMAIN,
    },
    images: {
      domains: ["image.shutterstock.com"],
    },
    webpackDevMiddleware: (config) => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };

      return config;
    },
  };
};
