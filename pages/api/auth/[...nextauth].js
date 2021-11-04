import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../utils/auth.helpers";

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
