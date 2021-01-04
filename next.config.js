const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  let env;
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      env = {
        region: "us-west-2",
        IDP_DOMAIN: "https://client-dev.auth.us-west-2.amazoncognito.com",
        USER_POOL_ID: "us-west-2_LXixVGm0S",
        USER_POOL_CLIENT_ID: "4520etddlftripdecf3i5adlui",
        REDIRECT_SIGN_IN: "http://localhost:3000/token",
        REDIRECT_SIGN_OUT: "http://localhost:3000/",
        AUTH_COOKIE_DOMAIN: "localhost",
      };
      break;
    default:
      env = {
        region: "us-west-2",
        IDP_DOMAIN: "https://egp-dev.auth.us-west-2.amazoncognito.com",
        USER_POOL_ID: "us-west-2_FfUt6t2pW",
        USER_POOL_CLIENT_ID: "27bjcaqoebko8dq9cvvvbsuae1",
        REDIRECT_SIGN_IN: "http://localhost:3000/token",
        REDIRECT_SIGN_OUT: "http://localhost:3000/",
        AUTH_COOKIE_DOMAIN: "localhost",
      };
  }
  return {
    images: {
      domains: ["image.shutterstock.com"],
    },
    env,
  };
};
