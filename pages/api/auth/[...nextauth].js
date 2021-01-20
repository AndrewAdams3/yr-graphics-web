import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl: process.env.GOOGLE_AUTH_URL,
    }),
  ],
  pages: {
    // signIn: "/auth/signin",
  },
  events: {},
};

export default (req, res) => NextAuth(req, res, options);
