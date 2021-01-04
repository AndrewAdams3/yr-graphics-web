import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";

export default function configureAmp () {
  Amplify.configure({
    Auth: {
      region: process.env.region,
      userPoolId: process.env.USER_POOL_ID,
      userPoolWebClientId: process.env.USER_POOL_CLIENT_ID,
      cookieStorage: {
        domain: process.env.AUTH_COOKIE_DOMAIN,
        path: "/",
        expires: 7,
        secure: false,
      },
    },
  });

  Auth.configure({
    oauth: {
      domain: process.env.IDP_DOMAIN,
      scope: ["email", "openid", "profile"],
      redirectSignIn: process.env.REDIRECT_SIGN_IN,
      redirectSignOut: process.env.REDIRECT_SIGN_OUT,
      responseType: "token",
    },
  });
}