import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectToDatabase } from "../../../utils/auth.helpers";

export default NextAuth({
  providers: [
    EmailProvider({
      server: {
        host: "",
        port: "",
        auth: {
          user: "",
          password: "",
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    //     IX_TSK: Add more providers here: https://next-auth.js.org/getting-started/example
    // Facebook & Google.
  ],
  database: process.env.DATABASE_URL,
  adapter: MongoDBAdapter({
    db: connectToDatabase(),
  }),
  secret: process.env.AUTH_SECRET,
});
