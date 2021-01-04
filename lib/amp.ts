export default {
  Auth: {
    region: process.env.NEXT_PUBLIC_region,
    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID,
    cookieStorage: {
      domain: process.env.NEXT_PUBLIC_AUTH_COOKIE_DOMAIN,
      path: "/",
      expires: 7,
      secure: false,
    },
    oauth: {
      domain: process.env.IDP_DOMAIN,
      scope: ["email", "openid", "profile"],
      redirectSignIn: process.env.NEXT_PUBLIC_REDIRECT_SIGN_IN,
      redirectSignOut: process.env.NEXT_PUBLIC_REDIRECT_SIGN_OUT,
      responseType: "token",
    }
  },
  ssr: true
}