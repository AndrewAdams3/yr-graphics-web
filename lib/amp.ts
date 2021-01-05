const awsConfig = {
  Auth: {
    region: process.env.REGION,
    userPoolId: process.env.USER_POOL_ID,
    userPoolWebClientId: process.env.USER_POOL_CLIENT_ID,
    cookieStorage: {
      domain: process.env.AUTH_COOKIE_DOMAIN,
      path: "/",
      expires: 7,
      secure: false,
    },
    oauth: {
      domain: process.env.IDP_DOMAIN,
      scope: ["email", "openid"],
      redirectSignIn: process.env.REDIRECT_SIGN_IN,
      redirectSignOut: process.env.REDIRECT_SIGN_OUT,
      responseType: "token",
    },
  },
}

export default awsConfig