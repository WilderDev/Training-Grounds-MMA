import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectToDatabase } from "../../../utils/mongo.helpers";

export default NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    //     IX_TSK: Add more providers here: https://next-auth.js.org/getting-started/example
  ],
  database: process.env.DATABASE_URL,
  adapter: MongoDBAdapter({
    db: connectToDatabase(),
  }),
  secret: process.env.AUTH_SECRET,
});
