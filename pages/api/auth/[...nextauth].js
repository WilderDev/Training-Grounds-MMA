import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../utils/auth.helpers";

// export default NextAuth({
//   providers: [
//     EmailProvider({
//       server: process.env.EMAIL_SERVER,
//       from: process.env.EMAIL_FROM,
//     }),
//     //     IX_TSK: Add more providers here: https://next-auth.js.org/getting-started/example
//     // Facebook & Google.
//   ],
//   database: process.env.DATABASE_URL,
//   adapter: MongoDBAdapter({
//     db: await connectToDatabase(),
//   }),
//   secret: process.env.AUTH_SECRET,
// });

export default async function auth(req, res) {
  return await NextAuth(req, res, {
    adapter: MongoDBAdapter({
      db: (await clientPromise).db("Users"),
    }),
    providers: [
      EmailProvider({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM,
      }),
      //     IX_TSK: Add Facebook & Google providers
    ],
  });
}
