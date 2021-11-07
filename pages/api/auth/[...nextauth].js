import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../utils/auth.helpers";

// TSK TODO AND CREATE A COURSE

// https://next-auth.js.org/configuration/callbacks
// https://nextjs.org/docs/authentication
// https://dev.to/ndom91/adding-authentication-to-an-existing-serverless-next-js-app-in-no-time-with-nextauth-js-192h
// https://www.youtube.com/watch?v=kB6YNYZ63fw
// https://arunoda.me/blog/add-auth-support-to-a-next-js-app-with-a-custom-backend
// https://dev.to/dawnind/authentication-with-credentials-using-next-auth-and-mongodb-part-1-m38
// https://dev.to/dawnind/authentication-with-credentials-using-next-auth-and-mongodb-part-2-2g8k
//

export default async function auth(req, res) {
  const { email, password, isFighter } = req.body;
  console.log("email, password, isFighter:", email, password, isFighter);

  return await NextAuth(req, res, {
    adapter: MongoDBAdapter({
      db: (await clientPromise).db("Users"),
    }),
    providers: [
      EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        },
        from: process.env.EMAIL_FROM,
      }),
      //     IX_TSK: Add Facebook & Google providers
    ],
  });
}
